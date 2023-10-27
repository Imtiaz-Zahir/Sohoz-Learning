"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

export default function Page() {
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);

  const hendelSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        pass: e.target.elements.pass.value,
        password_confirm: e.target.elements.password_confirm.value,
      }),
    });
    const user = await res.json();
    res.status === 201 ? signIn() : setErr(user.mass);
  };

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 flex justify-center">
      <div className="xs:p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl login-shadow">
        <h1 className="text-3xl font-bold my-6">Hello, Welcome !</h1>
        <form onSubmit={hendelSubmit}>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="name">
              Name :
            </label>
            <input
              className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="email">
              E-mail :
            </label>
            <input
              className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="pass">
              Password :
            </label>
            <div className="flex items-center relative">
              <input
                className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
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
          </div>
          <div className="my-4">
            <label
              className="my-2 text-xl font-semibold"
              htmlFor="password_confirm"
            >
              Confirm Password :
            </label>
            <div className="flex items-center relative">
              <input
                className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
                type={show ? "text" : "password"}
                name="password_confirm"
                placeholder="Confirm Password"
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
          </div>
          <div className="my-4 flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md font-bold text-center text-lg uppercase"
            >
              Register
            </button>
            <p className="text-center font-medium">
              Alrady have an account?
              <Link
                className="mx-2 text-orange-500 hover:text-blue-800 transition-all "
                href="./login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
        <p className="text-red-600 text-lg font-bold">{err}</p>
      </div>
    </section>
  );
}
