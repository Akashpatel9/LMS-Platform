import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:["Admin", "Student", "Instructor"],
        required:true,
    },
    additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,
    },
    courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Courses",
    },
    courseProgress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress"
    }
})


export const userModel = mongoose.model("User", userSchema);