const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const prices = async (req, res) => {
  const prices = await stripe.prices.list();
  // console.log(prices);
  res.json(prices.data);
};

export const createSubscription = async (req, res) => {
  console.log(req.body);
  // const { customerId, planId } = req.body;
  // const subscription = await stripe.subscriptions.create({
  //   customer: customerId,
  //   items: [{ price: planId }]
  // });
  // res.json(subscription);
}
