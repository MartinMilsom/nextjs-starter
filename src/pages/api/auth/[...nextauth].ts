import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiHandler } from "next";

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    database: process.env.AUTH_DATABASE_URL
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;