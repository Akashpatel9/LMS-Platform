import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    about: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: Number,
        unique: true,
    },
    gender: {
        type: String,
    }
})


export const profileModel = mongoose.model("Profile", profileSchema);