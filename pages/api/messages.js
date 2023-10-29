import { connectDatabase } from "../../helpers/database-util";

export default async function handler(req, res) {
  let regName = /^\b(?:[A-Z]\w+\b(?:\s*)?)+$/;
  let regTel =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;

  if (req.method === "POST") {
    const { name, email, tel, message, date } = req.body;

    // Add more validation
    if (
      !name ||
      !regName.test(name) ||
      !email ||
      !email.includes("@") ||
      !tel ||
      !regTel.test(tel) ||
      !message
    ) {
      res.status(442).json({ message: "Data is invalid!" });
      return;
    }

    const newMessage = {
      date,
      name,
      email,
      tel,
      message,
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
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.includes = result.insertedId;
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
