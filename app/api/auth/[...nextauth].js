import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      // issuer: process.env.ISSUER
    })
  ],
  secret: process.env.JWT_SECRET
})
