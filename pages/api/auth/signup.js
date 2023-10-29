import { connectDatabase } from "../../../helpers/database-util";
import { hashPassword } from "../../../helpers/password-hash-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password || password.trim().length < 7) {
      res.status(422).json({ message: "Username or password is invalid!" });
      return;
    }

    const client = await connectDatabase();
    const db = client.db("art-gallery-angelina");

    const userExists = await db
      .collection("admin-users")
      .findOne({ username: username });
    if (userExists) {
      res.status(422).json({ message: "User exists!" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection("admin-users")
      .insertOne({ username: username, password: hashedPassword });

    res.status(201).json({ message: "Created user!" });
    client.close();
  }
}
