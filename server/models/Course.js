import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true
    },
    instractor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    whatYouWillLearn: {
        type: String,
        required: true
    },
    courseContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true
    }],
    ratingAndReview: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReview",
    }],
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    Tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    },
    StudentEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
})


export const CourseModel = mongoose.model("Courses", CourseSchema);