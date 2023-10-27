"use client";
import React,{useState} from "react";
import Course from "./(components)/course";
import Blog from "./(components)/blog";


const sideManu = ["course", "blog"];

export default function Page() {
  const [main, setMain] = useState(<Course/>);
  const [lis, setLis] = useState("course");
  const clickHandler = (m) => {
    setLis(m.target.innerText);
    const contain = m.target.innerText;

    switch (contain) {
      case "blog":
        setMain(<Blog/>);
        break;
      default:
        setMain(<Course/>);
    }
  };

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 lg:flex py-28">
      <ul className="lg:w-[20%] w-full border-r border-slate-300 text-lg font-medium flex flex-col gap-2">
        {sideManu.map((item, index) => {
          return (
            <li
              key={index}
              onClick={clickHandler}
              className={`pl-2 flex items-center gap-2 cursor-pointer py-2 rounded-l-md ${
                lis == item ? "bg-orange-500 text-white" : "hover:bg-orange-200"
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {main}
    </section>
  );
}
