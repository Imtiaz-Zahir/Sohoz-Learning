"use client";
import React,{useState} from "react";
import Image from "next/image";
import { UilAngleDown } from "@iconscout/react-unicons";

const faqs = [
  {
    question: "How can I get the course certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
  },
  {
    question: "How can I get the course certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
  },
  {
    question: "How can I get the course certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
  },
  {
    question: "How can I get the course certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
  },
  {
    question: "How can I get the course certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
  },
];

export default function faq() {

  return (
    <section className="w-full py-20 px-0 xs:px-2 sm:px-6 lg:px-20 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-cyan-50">
      <div className="text-center">
        <h2 className="text-orange-600 font-medium my-2">POPULAR QUESTIONS</h2>
        <h3 className="text-4xl font-bold mb-6">Frequently Asked Questions</h3>
        {faqs.map((data, index) => FaqItem(data, index))}
      </div>
      <Image
        className="w-full rounded-3xl"
        height={900}
        width={700}
        src="/webinar-img-5.jpg"
        alt=""
      />
    </section>
  );
}

function FaqItem(data, index) {
    const [open,setOpen] = useState(false);

  return (
    <div
      key={index}
      className={`px-6 py-4 my-3 transition-all overflow-hidden bg-white rounded-xl duration-500 faq`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{data.question}</h1>
        <UilAngleDown
          onClick={()=>setOpen(pre=>!pre)}
          size="24"
          color="#ea580c"
          className={`cursor-pointer ${open?'rotate-180':null}`}
        />
      </div>
      {open?<p className="text-lg mt-6">{data.answer}</p>:null}
    </div>
  );
}
