import React from 'react'
import WebinarPreview from '@/components/WebinarPreview'

const webinars = [
    {
    id:1,
    image:"/webinar-img-2.jpg",
    name:"Web Programming Career Guideline",
    date:"12 May, 2021",
    time:"10:00 PM",
    description:"Donec nec justo eget felis facilisis. Aliquam porttitor mauris sit amet orci.",
  },
  {
    id:2,
    image:"/webinar-img-2.jpg",
    name:"Web Programming Career Guideline",
    date:"12 May, 2021",
    time:"10:00 PM",
    description:"Donec nec justo eget felis facilisis. Aliquam porttitor mauris sit amet orci.",
  },
  {
    id:3,
    image:"/webinar-img-2.jpg",
    name:"Web Programming Career Guideline",
    date:"12 May, 2021",
    time:"10:00 PM",
    description:"Donec nec justo eget felis facilisis. Aliquam porttitor mauris sit amet orci.",
  },
  ]

export default function Page({params}) {
  return (
    <>
    
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 flex flex-col items-center">
        <iframe className="rounded-2xl w-full" src="https://www.youtube.com/embed/XHOmBV4js_E" height="500px" frameborder="0"></iframe>
        <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-10 bg-white shadow-lg my-4 -mt-12 w-3/4">
            <div className="font-bold flex lg:text-2xl">
                <p><i className="uil uil-calendar-alt mx-1 text-orange-500"></i>20 July, 2021</p>
                <p className="mx-4"><i className="uil uil-clock mx-1 text-orange-500"></i>10:00 PM</p>
                <p><i className="fa-solid fa-ticket text-orange-500 mx-1"></i>Free</p>
            </div>
            <a href=""><div className="px-8 py-4 rounded-lg text-white bg-orange-600 hover:bg-blue-900">FREE REGISTRATION</div></a>
        </div>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20 grid justify-center gap-4 lg:grid-cols-4">
        <div className="h-40 w-40 rounded-full flex flex-col justify-center items-center from-shadow">
            <p className="font-bold text-6xl">0</p>
            <p className="font-semibold text-lg my-2">Days</p>
        </div>
        <div className="h-40 w-40 rounded-full flex flex-col justify-center items-center from-shadow">
            <p className="font-bold text-6xl">0</p>
            <p className="font-semibold text-lg my-2">Days</p>
        </div>
        <div className="h-40 w-40 rounded-full flex flex-col justify-center items-center from-shadow">
            <p className="font-bold text-6xl">0</p>
            <p className="font-semibold text-lg my-2">Days</p>
        </div>
        <div className="h-40 w-40 rounded-full flex flex-col justify-center items-center from-shadow">
            <p className="font-bold text-6xl">0</p>
            <p className="font-semibold text-lg my-2">Days</p>
        </div>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20 text-center lg:text-start">
        <h2 className="my-4 text-4xl font-bold">About The Webinar</h2>
        <p className="text-slate-500 font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
        <p className="my-4 text-slate-500 font-medium">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20">
        <h2 className="my-4 text-4xl font-bold text-center lg:text-start">About The Webinar</h2>
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
            <div className="flex items-center">
                <i className="uil uil-check text-orange-600 mx-2 text-2xl"></i>
                <p>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</p>
            </div>
        </div>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20 text-center lg:text-start">
        <h2 className="my-4 text-4xl font-bold">Key Topic We Will Cover</h2>
        <ul className="grid lg:grid-cols-2 gap-6 list-disc px-8">
            <li>
                <h5 className="font-bold text-xl my-2">Proper Strategies</h5>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </li>
            <li>
                <h5 className="font-bold text-xl my-2">Proper Strategies</h5>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </li>
            <li>
                <h5 className="font-bold text-xl my-2">Proper Strategies</h5>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </li>
            <li>
                <h5 className="font-bold text-xl my-2">Proper Strategies</h5>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </li>
        </ul>
    </section>
    <section className="py-16px-0 xs:px-2 sm:px-6 lg:px-20 my-20 md:grid-cols-2 xl:grid-cols-4 grid">
        <h2 className="my-4 text-4xl font-bold md:col-span-2 xl:col-span-4">Speakers</h2>
        <div className="p-2 flex flex-col justify-center items-center rounded-md hover:shadow-lg">
            <img className="rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg" alt=""/>
            <h2 className="my-4 text-xl font-bold">Shane Warne</h2>
            <p>Instructor</p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center rounded-md hover:shadow-lg">
            <img className="rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg" alt=""/>
            <h2 className="my-4 text-xl font-bold">Shane Warne</h2>
            <p>Instructor</p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center rounded-md hover:shadow-lg">
            <img className="rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg" alt=""/>
            <h2 className="my-4 text-xl font-bold">Shane Warne</h2>
            <p>Instructor</p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center rounded-md hover:shadow-lg">
            <img className="rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg" alt=""/>
            <h2 className="my-4 text-xl font-bold">Shane Warne</h2>
            <p>Instructor</p>
        </div>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20">
        <h2 className="my-4 text-4xl font-bold col-span-4">Free Registration Form</h2>
        <form className="grid gap-4 grid-cols-2 w-full p-6 rounded-xl from-shadow">
            <div className="col-span-2 lg:col-span-1">
                <label className="font-bold text-xl" htmlFor="fname">First Name :</label><br/>
                <input className="my-2 w-full border border-slate-400 h-12 rounded-md px-4 text-lg font-medium" type="text" name="fName" id=""/>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <label className="font-bold text-xl" htmlFor="lname">Last Name :</label><br/>
                <input className="my-2 w-full border border-slate-400 h-12 rounded-md px-4 text-lg font-medium" type="text" name="lName" id=""/>
            </div>
            <div className="col-span-2">
                <label className="font-bold text-xl" htmlFor="email">Email :</label><br/>
                <input className="my-2 w-full border border-slate-400 h-12 rounded-md px-4 text-lg font-medium" type="email" placeholder="you@domain.com" name="email" id=""/>
            </div>
            <div className="col-span-2">
                <label className="font-bold text-xl" htmlFor="call">Phone Number :</label><br/>
                <input className="my-2 w-full border border-slate-400 h-12 rounded-md px-4 text-lg font-medium" type="tel" placeholder="your Phone Number" name="call" id=""/>
            </div>
            <div className="col-span-2">
                <label className="font-bold text-xl" htmlFor="Comment">Message (if any) :</label><br/>
                <textarea className="my-2 w-full border border-slate-400 rounded-md px-4 text-lg font-medium" name="Comment" id="" rows="5"></textarea>
            </div>
            <div className="col-span-2 flex justify-start items-center"><button className="uppercase py-3 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md transition-all duration-300" type="submit">Submit</button></div>
            
        </form>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <h2 className="my-4 text-4xl font-bold col-span-1 lg:col-span-2">Upcoming Webinars</h2>
        {webinars.map((data,index) => {return <WebinarPreview key={index} data={data}/>})}
    </section>
    
    </>
  )
}
