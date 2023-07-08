import React from 'react';
import { useState } from 'react';
import Overview from './Overview';
import Profile from './Profile';
import Enrolled from './Enrolled';
import Reviews from './Reviews';
import Quiz from './Quiz';
import QNA from './QNA';

const sideManu = [{ manu: "Dashboard", icon: "dashboard" }, { manu: "My Profile", icon: "user" }, { manu: "Enrolled Courses", icon: "graduation-cap" }, { manu: "Reviews", icon: "star" }, { manu: "My Quiz", icon: "shield" }, { manu: "Question & Answer", icon: "question" }];

export default function Dashbord() {
    let contain;
    const [main, setMain] = useState(<Overview />);
    const [lis, setLis] = useState("Dashboard");
    const clickHandler = (m) => {
        if (m.target.tagName == "I") {
            setLis(m.target.parentElement.innerText);
            contain=m.target.parentElement.innerText;
        } else {
            setLis(m.target.innerText);
            contain=m.target.innerText;
        }
        switch (contain) {
            case "My Profile": setMain(<Profile />);
                break;
            case "Enrolled Courses": setMain(<Enrolled />);
                break;
            case "Reviews": setMain(<Reviews />);
                break;
            case "My Quiz": setMain(<Quiz />);
                break;
            case "Question & Answer": setMain(<QNA />);
                break;
            default: setMain(<Overview />);
        }
    }
    return (
        <>
            <section className="px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 flex items-center border border-b-slate-300">
                <img className="rounded-full m-8" height="100px" width="100px"
                    src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2022/11/OIP-1-150x150.jpg" alt="" />
                <div>
                    <h4 className="text-xl">Hello</h4>
                    <h1 className="text-2xl">name</h1>
                </div>
            </section>
            <section className="px-0 xs:px-2 sm:px-6 lg:px-20 lg:flex">
                <ul className="lg:w-[20%] w-full border-r border-slate-300 py-8 text-lg font-medium">
                    {
                        sideManu.map((item, index) => {
                            return (<li key={index} onClick={clickHandler} className={`py-2 cursor-pointer my-1 rounded-l-md ${lis == item.manu ? "bg-orange-500 text-white" : "hover:bg-orange-200"}`}><i
                                className={`uil text-xl uil-${item.icon} mx-2`}></i>{item.manu}</li>)
                        })
                    }
                    <hr />
                    <a href="">
                        <li className="py-2 cursor-pointer my-1 rounded-l-md hover:bg-orange-200"><i
                            className="uil uil-signout text-xl mx-2"></i>Logout</li>
                    </a>
                </ul>
                {main}
            </section>
        </>
    )
}
