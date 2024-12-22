import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
    courseName:{
        type:String,
        required:true,
        
    }
})


export const CourseModel = mongoose.model("Courses", CourseSchema);