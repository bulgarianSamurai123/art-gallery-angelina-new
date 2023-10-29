import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectDatabase } from "../../../helpers/database-util";
import { verifyPassword } from "../../../helpers/password-hash-util";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDatabase();

        const usersCollection = client.db("art-gallery-angelina").collection("admin-users");
        const user = await usersCollection.findOne({
          username: credentials.username,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Passwords dont match!");
        }

        client.close();
        return { username: user.username };
      },
    }),
  ],
});
