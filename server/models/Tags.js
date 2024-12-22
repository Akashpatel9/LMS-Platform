import mongoose, { Schema } from "mongoose";

const TagSchema = new Schema({
    Ccourse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
    }
})


export const TagModel = mongoose.model("Tag", TagSchema);