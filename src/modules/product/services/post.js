import { addData } from "../db/index.js";
import nodemailer from "nodemailer";

const sendEmail = () => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "fa7614047@gmail.com",
      pass: "vapk imva shuu ggrv",
    },
  });

  const mailOptions = {
    from: "fa7614047@gmail.com",
    to: "faixan6190@gmail.com",
    subject: "Hello from nodemailer",
    text: "This is a third test email sent using nodemailer.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

const postData = async (data) => {
  sendEmail();
  return await addData(data);
};

export default postData;
