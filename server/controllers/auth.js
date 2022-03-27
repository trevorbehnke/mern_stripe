import { hashPassword, comparePassword } from "../helpers/auth";
import User from "../models/user";

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
      const { password, ...rest } = result._doc;
      console.log("result => ", rest);
      return res.json({
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
