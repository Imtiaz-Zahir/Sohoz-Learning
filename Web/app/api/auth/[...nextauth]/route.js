import NextAuth from "next-auth"
import querystring from 'querystring';
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   uname: { label: "Username", type: "text", placeholder: "jsmith" },
      //   pass: { label: "Password", type: "password" } 
      // },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        // const res = await fetch("http://localhost/oursite/apis/loginapi.php", {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: querystring.stringify({uname:credentials.username,pass:credentials.password}),
        // })
        // const user = await res.json()

        const prisma = new PrismaClient();
        try {
          const user = await prisma.users.findUnique({
            where: {
              email:credentials.username,
              password:credentials.password
            },
            select:{
              id:true,
              name:true,
              email:true
            }
          })
          return user
        } catch (error) {
          console.log(error);
          return null
        }finally{
          await prisma.$disconnect()
        }
      }
    })
  ],
  callbacks:{
    async session({ session }) {
      const prisma = new PrismaClient();
        try {
          const {id} = await prisma.users.findUnique({
            where: {
              email:session.user.email
            },
            select:{
              id:true
            }
          })
          session.user.id = id;

          return session

        } catch (error) {
          console.log(error);
          return null
        }finally{
          await prisma.$disconnect()
        }
    }
  },
  // pages: {
  //   signIn: '/logins',
  // }
}

const handler = NextAuth(authOptions)

export {
  handler as GET, handler as POST
}