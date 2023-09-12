"use client";
import React from "react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

export default function Profile({ user }) {
  const [show, setShow] = React.useState(false);

  async function changePass(e) {
    e.preventDefault();
    const { prvPass, newPass, conNewPass } = e.target;
    if (newPass.value !== conNewPass.value) {
      alert("New Password and Confirm Password are not matched");
      return;
    }
    await fetch("/api/dashbord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prvPass: prvPass.value,
        newPass: newPass.value,
        conNewPass: conNewPass.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        data.msg === "Password Changed Successfully" ? e.target.reset() : null;
      });
  }

  return (
    <div className="lg:p-6 lg:w-[80%]">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <div className="flex justify-between lg:justify-start">
        <div className="w-[25%]">
          <p className="text-lg my-4 font-medium">Full Name</p>
          {/* <p className="text-lg my-4 font-medium">Username</p> */}
          <p className="text-lg my-4 font-medium">Email</p>
          {/* <p className="text-lg my-4 font-medium">Phone Number</p> */}
          {/* <p className="text-lg my-4 font-medium">Skill/Occupation</p> */}
          {/* <p className="text-lg my-4 font-medium">Biography</p> */}
        </div>
        <div>
          <p className="text-lg my-4 font-semibold">{user.name}</p>
          {/* <p className="text-lg my-4 font-semibold">Bangladesh</p> */}
          <p className="text-lg my-4 font-semibold">{user.email}</p>
          {/* <p className="text-lg my-4 font-semibold">01792932818</p> */}
          {/* <p className="text-lg my-4 font-semibold">Mobile apps Publisher</p> */}
          {/* <p className="text-lg my-4 font-semibold">We are not hacker</p> */}
        </div>
      </div>
      <h2 className="text-xl font-semibold my-4">Change Password:</h2>
      <form
        className="flex flex-col gap-2 max-w-screen-xs"
        onSubmit={changePass}
      >
        <div className="flex items-center relative">
          <input
            className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium"
            type={show ? "text" : "password"}
            name="prvPass"
            placeholder="Old Password"
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
        <div className="flex items-center relative">
          <input
            className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium"
            type={show ? "text" : "password"}
            name="newPass"
            placeholder="New Password"
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
        <div className="flex items-center relative">
          <input
            className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium"
            type={show ? "text" : "password"}
            name="conNewPass"
            placeholder="Confirm New Passowrd"
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
        <button
          type="submit"
          className="w-3/5 bg-orange-600 mx-auto py-2 font-semibold rounded-md"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
