import jwt from "jsonwebtoken";
import otp from "../models/otp.js"

export const findOtp = async (req, res) => {
  const otpData = req.body;
  const userId = req.userId;
  const verificationId = req.verificationId;
  
  try {
    const existingOtp = await otp.findOne({ verificationId });
    if(existingOtp){
      res.status(200).json("Otp succesfull")
    }
    const newOtp = await otp.create({ otpData,userId,verificationId })
     const token = jwt.sign(
        { verificationId: newOtp.verificationId, id: newOtp._id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );
      res.status(200).json({ result: newOtp, token });
    }  catch (error) {
      res.status(500).json("Something went worng...");
    }
  };