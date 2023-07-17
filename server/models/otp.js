import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
    otp:[{
    verificationId : { type : String },
    userId : { type: String},
    Otp:{type:Boolean,required:true},
  }]
})

export default mongoose.model("Otp", otpSchema);