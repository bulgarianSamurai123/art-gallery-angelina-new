import nodemailer from "nodemailer";

const email = process.env.email;
const pass = process.env.email_pass;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
