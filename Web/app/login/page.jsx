"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

export default function Page() {
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  
  const hendelSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: e.target.elements.uname.value,
      password: e.target.elements.pass.value,
      redirect: false,
      callbackUrl:"/dashbord"
    });
    res.error ? setErr(true) : location.reload();
  };

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 flex justify-center">
      <div className="xs:p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl login-shadow">
        <h1 className="text-3xl font-bold my-6">Hi, Welcome back!</h1>
        {err ? (
          <p className="text-red-600 text-lg font-bold">
            Email and Password are not valid
          </p>
        ) : null}
        <form onSubmit={hendelSubmit}>
          <input
            className="w-full border border-slate-400 h-12 p-2 my-2 rounded-md"
            type="email"
            name="uname"
            placeholder="Email Address"
            required
          />
          <div className="flex items-center relative">
          <input
            className="w-full border border-slate-400 h-12 p-2 mt-2 rounded-md"
            type={show ? "text" : "password"}
            name="pass"
            placeholder="Password"
            required
          />
          {show ? (
            <UilEyeSlash
              size="20"
              className="text-slate-400 cursor-pointer absolute right-4"
              onClick={() => setShow((prv) => !prv)}
            />
          ) : (
            <UilEye
              size="20"
              className="text-slate-400 cursor-pointer absolute right-4"
              onClick={() => setShow((prv) => !prv)}
            />
          )}
          </div>
          <div className="flex justify-between text-lg my-8">
            <div>
              <input type="checkbox" name="keep" />
              <label className="font-bold mx-2" htmlFor="keep">
                Keep me signed in
              </label>
            </div>
            <p className="font-medium hover:text-orange-500">Forget?</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md font-bold text-center text-lg uppercase"
          >
            sing in
          </button>
        </form>
        <p className="text-center text-lg font-medium mt-6">
          Don&apos;t have an account?
          <Link
            className="mx-2 text-orange-500 hover:text-blue-800 transition-all "
            href="./register"
          >
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}
