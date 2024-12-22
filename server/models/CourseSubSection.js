import mongoose, { Schema } from "mongoose";

const SubSectionSchema = new Schema({
    title:{
        type:String,
        trim:true
    },
    timeDuration:{
        type:String,
        trim:true
    }, 
    description:{
        type:String,
        trim:true
    },
    videoUrl :{
        type:String,
    }
})


export const SubSectionModel = mongoose.model("SubSection", SubSectionSchema);