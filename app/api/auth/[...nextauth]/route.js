import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectToDataBase } from "@/database";
import bcrypt from "bcrypt";

const secret = process.env.NEXTAUTH_SECRET;
async function auth(req, res) {
    return await NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: { label: "Email", type: "email" },
                    password: { label: "Password", type: "password" },
                },
                authorize: async (credentials) => {
                    const email = credentials.email;
                    const password = credentials.password;

                    await connectToDataBase();
                    const user = await User.findOne({ email: email }).exec();
                    console.log(user);
                    if (!user) {
                        throw new Error("No user found with this email");
                    }
                    const isMatch = await bcrypt.compare(password, user.password);

                    if (!isMatch) {

                        throw new Error("Password does not match");
                    }

                    if (user) {
                        return user;
                    } else {
                        return null;
                    }
                },
            }),
        ],

        session: {
            strategy: "jwt",
            secret: secret,
            maxAge: 60 * 60, // 1 hour
            updateAge: 60 * 60, // 1 hour

        },
        pages: {
            signIn: '/login',

        },
        callbacks: {
            async jwt({ token, user }) {
                if (user) {
                    token.id = user._id.toString();
                    token.email = user.email;
                    token.name = user.fullName;
                }
                return token;
            },
            async session({ session, token, user }) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                return session;
            },
        },
    });
}

export { auth as GET, auth as POST };