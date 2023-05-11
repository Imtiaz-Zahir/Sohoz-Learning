import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 flex justify-center">
        <div className="xs:p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl login-shadow">
            <h1 className="text-3xl font-bold my-6">Hi, Welcome back!</h1>
            <form action="">
                <input className="w-full border border-slate-400 h-12 p-2 my-2 rounded-md"
                    type="email" name="uname" id="" placeholder="Email Address"/>
                <input className="w-full border border-slate-400 h-12 p-2 mt-2 rounded-md"
                    type="password" name="pass" id="" placeholder="Password"/>
            </form>
            <div className="flex justify-between text-lg my-8">
                <form action="">
                    <input type="checkbox" name="keep" id=""/>
                    <label className="font-bold mx-2" htmlFor="keep">Keep me signed in</label>
                </form>
                <a href="">
                    <p className="font-medium hover:text-orange-500">Forget?</p>
                </a>
            </div>
            <a href="">
                <div className="w-full py-2 bg-orange-500 text-white rounded-md font-bold text-center text-lg uppercase">
                    sing in</div>
            </a>
            <p className="text-center text-lg font-medium mt-6">Don't have an account?<Link
                    className="mx-2 text-orange-500 hover:text-blue-800 transition-all " to="./register">Register
                    Now</Link></p>
        </div>
    </section>
  )
}
