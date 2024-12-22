import mongoose, { Schema } from "mongoose";

const SectionSchema = new Schema({
    sectionName:{
        type:String,
        trim:true
    },
    SubSection:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }, 
    
})


export const SectionModel = mongoose.model("Section", SectionSchema);