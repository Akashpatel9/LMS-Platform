import mongoose, { Schema } from "mongoose";

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


export const OTPModel = mongoose.model("OTP", OTPSchema);