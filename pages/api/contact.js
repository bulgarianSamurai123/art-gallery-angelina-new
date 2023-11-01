import { transporter, mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, tel, message, date } = req.body;

    if (!name || !email || !tel || !message) {
      res.status(400).json({ message: "Form inputs cannot be empty!" });
      return;
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: name,
        text: 'This is a test string',
        html: '<h1>This is a test header</h1><p>This is a test paragraph</p>'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }

    res.status(200).json({ message: "Success!" });
  }

  res.status(400).json({ message: "Bad request!" });
}
