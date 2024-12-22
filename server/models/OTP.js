import mongoose, { Schema } from "mongoose";
import { SendMail } from "../utils/SendMail";

const OTPSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})

const sendVerificationEmail = async(email, otp)=>{
    try {
        const response = await SendMail(email,"Verification Email", otp);
        console.log("Mail send Sucess");
    } catch (error) {
        console.log("Mail send Failed")
        console.error(error);
    }
}

OTPSchema.pre("save", async(next)=>{
    await sendVerificationEmail(this.email, this.otp);
    next();
})

export const OTPModel = mongoose.model("OTP", OTPSchema);