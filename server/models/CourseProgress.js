import mongoose, { Schema } from "mongoose";

const CourseProgressSchema = new Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    completedVideo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }
})


export const CourseProgressModel = mongoose.model("CourseProgress", CourseProgressSchema);