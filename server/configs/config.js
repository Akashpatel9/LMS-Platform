import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT | 3000;
const DB_URL = process.env.DB_URL | "";
const JWT_SECRET = process.env.JWT_SECRET | "";


const MAIL_HOST = process.env.MAIL_HOST | "";
const MAIL_USER = process.env.MAIL_USER | "";
const MAIL_PASS = process.env.MAIL_PASS | "";


export {PORT, DB_URL, JWT_SECRET, MAIL_HOST, MAIL_PASS, MAIL_USER};