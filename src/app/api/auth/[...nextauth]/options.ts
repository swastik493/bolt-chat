import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";


export interface CustomSession {
    user?:CustomUser;
    expires:ISODateString
}

export interface CustomUser {
    id?:string|null;
    name?:string|null;
    email?:string|null;
    image?:string|null;
    provider?:string|null;
    token?:string|null;
}

export const authOption:AuthOptions = {
    pages:{
        signIn:"/"
    },
    callbacks:{
        async signIn({ user, account, profile }) {
            console.log("User Data is: ",user);
            console.log("Account Data is: ",account);
            
            return true
          },

        async session({ session, user, token }:{session:CustomSession,user:CustomUser,token:JWT}) {
            session.user = token.user as CustomUser;
            return session
          },
          async jwt({ token, user }) {
            if(user){
                token.user = user
            }
            return token
          }
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ]
}