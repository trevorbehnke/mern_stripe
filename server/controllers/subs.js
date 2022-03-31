import User from "../models/user";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const prices = async (req, res) => {
  const prices = await stripe.prices.list();
  // console.log(prices);
  res.json(prices.data);
};

export const createSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      customer: user.stripe_customer_id,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("session => ", session);
    res.json(session.url);
  } catch (error) {
    console.log(error);
  }
};
