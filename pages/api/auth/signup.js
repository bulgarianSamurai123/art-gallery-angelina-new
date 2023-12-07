import { connectDatabase } from "../../../helpers/database-util";
import { hashPassword } from "../../../helpers/password-hash-util";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid request!" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ message: "Invalid input!" });
  }

  const client = await connectDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password)

  db.collection("admin-users").insertOne({
    username: username,
    password: hashedPassword
  });

  res.status(201).json({ message: "User created!" });
}
