import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

// import FacebookProvider from "next-auth/providers/facebook"; // Some troubleshooting issues to be performed
// import GoogleProvider from "next-auth/providers/google"; // Requires top-level domain (.com or smth)
// import AppleProvider from "next-auth/providers/apple"; // Requires $99/month for Apple Developer account lol


const githubClientId: string = process.env.GITHUB_CLIENT_ID ?? "";
const githubClientSecret: string = process.env.GITHUB_CLIENT_SECRET ?? "";
// const facebookClientId: string = process.env.FACEBOOK_CLIENT_ID ?? "";
// const facebookClientSecret: string = process.env.FACEBOOK_CLIENT_SECRET ?? "";
const discordClientId: string = process.env.DISCORD_CLIENT_ID ?? "";
const discordClientSecret: string = process.env.DISCORD_CLIENT_SECRET ?? ""; 
// const appleClientId: string = process.env.APPLE_CLIENT_ID ?? "";
// const appleClientSecret: string = process.env.APPLE_CLIENT_SECRET ?? "";

export const authOptions : NextAuthOptions = {
    session : {
        strategy : 'jwt'
    },
    jwt : {
      secret : process.env.NEXTAUTH_SECRET ?? ""
    },
    providers: [
      GithubProvider({
        clientId: githubClientId,
        clientSecret: githubClientSecret,
      }),
      DiscordProvider({
        clientId: discordClientId,
        clientSecret: discordClientSecret,
      }),
    ],
  }
  

export default NextAuth(authOptions);
