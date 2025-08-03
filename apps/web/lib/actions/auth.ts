import { getServerSession, NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import { clientId, clientSecret, nextAuthSecret } from "../config";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import jwt from "jsonwebtoken";

// use it in the auth route next auth
const authOptions = {
  providers: [Github({ clientId: clientId!, clientSecret: clientSecret! })],
  secret: nextAuthSecret,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, profile, user, account, session }) {
      console.log("###DEBUG### ");
      console.log({ token, profile, user, account, session });
      return token;
    },
    async session({ token, session, user }) {
      console.log("###DEBUG### ");
      console.log({ token, session });
      return session;
    },
  },
} as NextAuthOptions;

// use it in server contexts
function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { authOptions, auth };
