import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { connectDatabase } from "../../../helpers/database-util";
import { verifyPassword } from "../../../helpers/password-hash-util";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();

        const adminCollection = client.db().collection("admin-users");

        const user = await adminCollection.findOne({
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
          throw new Error("Could not log in!");
        }

        client.close();
        return { username: user.username };
      },
    }),
  ],
});
