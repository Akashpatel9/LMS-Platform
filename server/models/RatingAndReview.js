import mongoose, { Schema } from "mongoose";

const RatingAndReviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})


export const RatingAndReviewModel = mongoose.model("RatingAndReview", RatingAndReviewSchema);