import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtpEmail = async (to, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Your OTP Code",
    text: `Hello,\n\nYour OTP is: ${otp}\nIt will expire in 5 minutes.\n\n- MyCommerce Team`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("✅ OTP Email sent:", info.response);
};
