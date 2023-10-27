"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Overview from "@/components/user/Overview";
import Profile from "@/components/user/Profile";
import { signOut } from "next-auth/react";
import {
  UilDashboard,
  UilUser,
  // UilGraduationCap,
  // UilStar,
  // UilShield,
  // UilQuestion,
  UilSignout,
} from "@iconscout/react-unicons";

export default function Page() {
  const { data: sessionData } = useSession();
  const sideManu = [
    {
      name: "Dashboard",
      icon: <UilDashboard size="20" />,
      component: <Overview />,
    },
    {
      name: "My Profile",
      icon: <UilUser size="20" />,
      component: <Profile user={sessionData?.user} />,
    },
  ];
  const [main, setMain] = useState(<Overview />);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <section className="px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 flex items-center border border-b-slate-300">
        <Image
          className="rounded-full m-8"
          height={100}
          width={100}
          src="/profile/client-1.jpg"
          alt="user profile"
        />
        <div>
          <h4 className="text-xl">Hello</h4>
          <h1 className="text-2xl">{sessionData?.user.name}</h1>
        </div>
      </section>
      <section className="px-0 xs:px-2 sm:px-6 lg:px-20 lg:flex">
        <ul className="lg:w-[20%] w-full border-r border-slate-300 py-8 text-lg font-medium">
          {sideManu.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  if (sessionData.user) {
                    setActive(item.name);
                    setMain(item.component);
                  }
                }}
                className={`pl-2 flex items-center gap-2 py-2 cursor-pointer my-1 transition-all rounded-l-md ${
                  active == item.name
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-200"
                }`}
              >
                {item.icon}
                {item.name}
              </li>
            );
          })}
          <hr />
          <li
            onClick={signOut}
            className="pl-2 flex items-center gap-2 py-2 cursor-pointer my-1 transition-all rounded-l-md hover:bg-orange-200"
          >
            <UilSignout size="20" />
            Logout
          </li>
        </ul>
        {main}
      </section>
    </>
  );
}
