import { connectDatabase } from "../../helpers/database-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, question } = req.body;

    if (
      !email ||
      !question ||
      email.includes("@") ||
      question.trim().length < 7
    ) {
      res.status(442).json({ message: "Email or question is invalid!" });
      return;
    }

    const client = await connectDatabase();
    const db = client.db("art-gallery-angelina");

    const result = await db
      .collection("questions")
      .insertOne({ email: email, question: question });

    res.status(201).json({ message: "Question submited!" });
    client.close()
  }
}
