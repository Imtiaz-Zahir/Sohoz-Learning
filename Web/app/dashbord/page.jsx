"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Overview from "@/components/user/Overview";
import Profile from "@/components/user/Profile";
import Enrolled from "@/components/user/Enrolled";
import Reviews from "@/components/user/Reviews";
import Quiz from "@/components/user/Quiz";
import QNA from "@/components/user/QNA";
import { signOut } from 'next-auth/react'
import {
  UilDashboard,
  UilUser,
  UilGraduationCap,
  UilStar,
  UilShield,
  UilQuestion,
} from "@iconscout/react-unicons";

const sideManu = [
  { manu: "Dashboard", icon: <UilDashboard size="20" /> },
  { manu: "My Profile", icon: <UilUser size="20" /> },
  { manu: "Enrolled Courses", icon: <UilGraduationCap size="20" /> },
  { manu: "Reviews", icon: <UilStar size="20" /> },
  { manu: "My Quiz", icon: <UilShield size="20" /> },
  { manu: "Question & Answer", icon: <UilQuestion size="20" /> },
];

export default function Page() {
  let contain;
  const [main, setMain] = useState(<Overview />);
  const [lis, setLis] = useState("Dashboard");
  const clickHandler = (m) => {
    if (m.target.tagName == "I") {
      setLis(m.target.parentElement.innerText);
      contain = m.target.parentElement.innerText;
    } else {
      setLis(m.target.innerText);
      contain = m.target.innerText;
    }
    switch (contain) {
      case "My Profile":
        setMain(<Profile user={user.user}/>);
        break;
      case "Enrolled Courses":
        setMain(<Enrolled/>);
        break;
      case "Reviews":
        setMain(<Reviews/>);
        break;
      case "My Quiz":
        setMain(<Quiz />);
        break;
      case "Question & Answer":
        setMain(<QNA />);
        break;
      default:
        setMain(<Overview/>);
    }
  };
 const {data:user} = useSession()

  return (
    <>
      <section className="px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 flex items-center border border-b-slate-300">
        <Image
          className="rounded-full m-8"
          height={100}
          width={100}
          src="/profile/client-1.jpg"
          alt={user?.user.name}
        />
        <div>
          <h4 className="text-xl">Hello</h4>
          <h1 className="text-2xl">{user?.user.name}</h1>
        </div>
      </section>
      <section className="px-0 xs:px-2 sm:px-6 lg:px-20 lg:flex">
        <ul className="lg:w-[20%] w-full border-r border-slate-300 py-8 text-lg font-medium">
          {sideManu.map((item, index) => {
            return (
              <li
                key={index}
                onClick={clickHandler}
                className={`pl-2 flex items-center gap-2 py-2 cursor-pointer my-1 rounded-l-md ${
                  lis == item.manu
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-200"
                }`}
              >
                {item.icon}
                {item.manu}
              </li>
            );
          })}
          <hr />
          <li onClick={signOut} className="py-2 cursor-pointer my-1 rounded-l-md hover:bg-orange-200">
            <i className="uil uil-signout text-xl mx-2"></i>Logout
          </li>
        </ul>
        {main}
      </section>
    </>
  );
}
