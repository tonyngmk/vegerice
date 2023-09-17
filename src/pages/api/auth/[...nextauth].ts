import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

// import { authOptions } from "~/server/auth";

const githubClientId: string = process.env.GITHUB_ID ?? "";
const githubClientSecret: string = process.env.GITHUB_CLIENT_SECRET ?? "";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: githubClientId,
        clientSecret: githubClientSecret,
      }),
      // ...add more providers here
    ],
  }
  

export default NextAuth(authOptions);
