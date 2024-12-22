import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    about: {
        anout: String,
        trim: true,
    },
    dob: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true
    }
})


export const profileModel = mongoose.model("Profile", profileSchema);