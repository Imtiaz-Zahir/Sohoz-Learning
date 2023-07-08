'use client'
import React from 'react';
import Image from 'next/image';
import { UilAngleDown } from '@iconscout/react-unicons';

const faqs = [
    {
        question: "How can I get the course certificate?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit"
    },
    {
        question: "How can I get the course certificate?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit"
    },
    {
        question: "How can I get the course certificate?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit"
    },
    {
        question: "How can I get the course certificate?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit"
    },
    {
        question: "How can I get the course certificate?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit"
    }
];

export default function faq() {
    const expand =(m)=>{
        if (m.currentTarget.parentElement.parentElement.classList[9] == "h-16") {
            m.currentTarget.parentElement.parentElement.classList.remove("h-16");
            m.currentTarget.classList.add("rotate-180");
        } else {
            m.currentTarget.parentElement.parentElement.classList.add("h-16");
            m.currentTarget.classList.remove("rotate-180");
        }
    }
    return (
        <section className="w-full py-20 px-0 xs:px-2 sm:px-6 lg:px-20 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-cyan-50">
            <div className="text-center">
                <h2 className="text-orange-600 font-medium my-2">POPULAR QUESTIONS</h2>
                <h3 className="text-4xl font-bold mb-6">Frequently Asked Questions</h3>
                {faqs.map((data, index) =>
                    <div key={index} className="px-6 py-4 my-3 transition-all overflow-hidden bg-white rounded-xl duration-500 faq h-16">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-bold">{data.question}</h1>
                            <UilAngleDown onClick={expand} size='24' color="#ea580c" className="cursor-pointer " />
                        </div>
                        <p className="text-lg">{data.answer}</p>
                    </div>)
                }
            </div>
            <Image className="w-full rounded-3xl" height={900} width={700}
                src="/webinar-img-5.jpg" alt="" />
        </section>
    )
}
