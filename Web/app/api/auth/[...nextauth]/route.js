import NextAuth from "next-auth"
import querystring from 'querystring';
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
        const res = await fetch("http://localhost/oursite/apis/loginapi.php", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: querystring.stringify({uname:credentials.username,pass:credentials.password}),
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (typeof user.name==="string") {
          return user
        }else{return null}
        // Return null if user data could not be retrieved
        // return null
      }
    })
  ],
  // pages: {
  //   signIn: '/logins',
  // }
}

const handler = NextAuth(authOptions)

export {
  handler as GET, handler as POST
}