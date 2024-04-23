import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        CredentialsProvider({
            async authorize(newUserInfo) {
                const userData = {
                    email: newUserInfo?.email,
                    password: newUserInfo?.password,
                }
            },
            
        }),
    ],
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };