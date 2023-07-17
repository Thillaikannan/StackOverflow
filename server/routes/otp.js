import express from "express";

import { findOtp } from "../controllers/otp.js"

//import { auth } from "../middleware/auth.js"

const router = express.Router();

router.post("/otp", findOtp);

export default router;
