import express from "express";

const router = express.Router();

import { prices } from "../controllers/subs";

router.get("/prices", prices);

module.exports = router;
