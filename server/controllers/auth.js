import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    // console.log("req.body => ", req.body);
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Please enter name",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Please enter password greater than 6 characters",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exist",
      });
    }
    // hash password
    const hash = await hashPassword(password);
    try {
      const user = new User({
        name,
        email,
        password: hash,
      });
      const result = await user.save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = result._doc;
      console.log("result => ", rest);
      return res.json({
        token,
        user: rest,
      });
    } catch (error) {
      console.log("error => ", error);
    }

    res.json({
      data: "Successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    // check email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        error: "Email not found",
      });
    }

    // check password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.json({
        error: "Password is incorrect",
      });
    }

    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const { password, ...rest } = user._doc;
    return res.json({
      token,
      user: rest,
    });
  } catch (error) {
    console.log(error);
  }
};
