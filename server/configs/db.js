import mongoose from "mongoose";
import { DB_URL } from "./config";

export const dbConnect = async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("Database Connection Sucsessfull");
    } catch (error) {
        console.log("BD Connection Failed");
        console.error(error)
        process.exitCode(0);
    }
}