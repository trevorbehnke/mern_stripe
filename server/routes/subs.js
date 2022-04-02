import express from "express";

const router = express.Router();

import {
  prices,
  createSubscription,
  subscriptionStatus,
} from "../controllers/subs";
import { requireSignin } from "../middlewares";

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);

module.exports = router;
