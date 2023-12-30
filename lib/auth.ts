import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { TSignInSchema } from "./types";
import { AuthSchema } from "@/schema/zodSchema";

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error("Failed to fetch user", error);
//     throw new Error("Failed to fetch user");
//   }
// }

export const { auth, signIn } = NextAuth({
  // add signOut latere here. TODO
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = AuthSchema.safeParse(credentials);

        // if (parsedCredentials.success) {
        //   const { email, password } = parsedCredentials.data;
        //   const user = await getUser(email);
        //   if (!user) return null;
        //   const passwordsMatch = await bcrypt.compare(password, user.password);

        //if(passwordsMatch) return user
        // }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});

// read more at https://arc.net/l/quote/qolvnjht about adding Oauth provider here
