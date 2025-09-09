import nodemailer from "nodemailer";
import { FormData } from "@/schema/formSchema";

export async function sendEmail(data: FormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "درخواست مشاوره جدید",
    text: `نام: ${data.name}\nنام خانوادگی: ${data.lastName}\nشماره: ${data.phone}`,
  });
}
