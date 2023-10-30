import { connectDatabase } from "../../../helpers/database-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, question, date } = req.body;

    if (!email || !question || !email.includes("@") || question.trim() === "") {
      res.status(442).json({ message: "Email or question is invalid!" });
      return;
    }

    const newQuestiong = {
      date,
      email,
      question,
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("art-gallery-angelina");

    try {
      const result = await db.collection("questions").insertOne(newQuestiong);
      newQuestiong.includes = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close();
    res.status(201).json({ message: "Question submited!" });
  }

  res.status(201).json({ message: "Success!" });
}
