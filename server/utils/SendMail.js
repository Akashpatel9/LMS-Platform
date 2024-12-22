import nodemailer from "nodemailer"
import { MAIL_HOST, MAIL_PASS, MAIL_USER } from "../configs/config";

export const SendMail = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from: "StudyNotion",
            to: email,
            subject: title,
            html: body
        })
        console.log(info);
        return info;
    } catch (error) {
        console.log("Error While Sending Mail");
        console.error(error);
    }
}