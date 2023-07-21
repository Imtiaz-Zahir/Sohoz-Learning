import React from 'react'

export default function CourseInfo() {
    const show = (m)=>{
        if(document.getElementById("aboutCourse").classList[2]=="h-20"){
            document.getElementById("aboutCourse").classList.remove("h-20");
            m.target.innerHTML="- Show Less";
        }else{
            document.getElementById("aboutCourse").classList.add("h-20");
            m.target.innerHTML="+ Show More";
        }
        
    };
    // const expand = (m)=>{
    //     if(m.target.classList[5]=="rotate-90"){
    //         m.target.classList.remove("rotate-90");
    //         m.target.parentElement.parentElement.classList.remove("h-14");
    //     }else{
    //         m.target.classList.add("rotate-90");
    //         m.target.parentElement.parentElement.classList.add("h-14");
    //     }
    // }

  return (
    <>
        <h5 className="my-4 text-lg font-bold mx-1">About Course</h5>
        {/* <div id="aboutCourse" className="overflow-hidden transition-all h-20"> */}
        <p>
            Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of
            Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar
            to WordPress, Joomla or Drupal.
            Knowing PHP has allowed me to make enough money to stay home and make courses like this one for
            students all over the world. Being a PHP developer can allow anyone to make really good money online
            and offline, developing dynamic applications.
            Knowing PHP will allow you to build web applications, websites or Content Management systems, like
            WordPress, Facebook, Twitter or even Google.
            There is no limit to what you can do with this knowledge. PHP is one of the most important web
            programming languages to learn, and knowing it, will give you SUPER POWERS in the web development
            world and job market place.
            Why?
            Because Millions of websites and applications (the majority) use PHP. You can find a job anywhere or
            even work on your own, online and in places like freelancer or Odesk. You can definitely make a
            substantial income once you learn it.
            I will not bore you 🙂
            I take my courses very seriously but at the same time I try to make it fun since I know how
            difficult learning from an instructor with a monotone voice or boring attitude is. This course is
            fun, and when you need some energy to keep going, you will get it from me.
            My Approach
            Practice, practice and more practice. Every section inside this course has a practice lecture at the
            end, reinforcing everything with went over in the lectures. I also created a small application the
            you will be able to download to help you practice PHP. To top it off, we will build and awesome CMS
            like WordPress, Joomla or Drupal.
            </p>
        {/* </div> */}
        {/* <button onClick={show} className="hover:text-orange-500 text-lg my-8 flex font-medium text-slate-500">+ Show More</button> */}
        <h5 className="my-4 text-lg font-bold mx-1">What Will You Learn?</h5>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 list-disc text-lg list-inside">
            <li>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)</li>
            <li>Create a diet that is perfect for your needs and lifestyle</li>
            <li>Learn when, what and how much you should eat for optimal body composition</li>
            <li>Build more muscle by optimizing your meal plan</li>
            <li>Lose fat faster by optimizing your meal plan</li>
            <li>Improve immunity and energy levels with the right vitamins and minerals</li>
        </ul>
        {/* <h5 className="my-4 text-lg font-bold mx-1">Course Content</h5>
        <div className="rounded-lg border border-slate-400 overflow-hidden my-4 h-14">
            <div className="flex border-b border-slate-400 justify-between items-center p-3 font-bold text-lg bg-slate-50 cursor-pointer hover:text-orange-500">
                <p>Setting up</p>
                <i onClick={expand} className="uil uil-angle-up text-orange-500 text-3xl leading-8 rotate-90"></i>
            </div>
            <div className="flex justify-between items-center p-2 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer">
                <div className="flex">
                    <i className="uil uil-youtube mx-2"></i>
                    <p>Basic Definitions</p>
                </div>
                <div className="flex">
                    <p>07:00</p>
                    <i className="uil uil-lock-alt mx-2"></i>
                </div>
            </div>
            <div className="flex justify-between items-center p-2 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer">
                <div className="flex">
                    <i className="uil uil-youtube mx-2"></i>
                    <p>Basic Definitions</p>
                </div>
                <div className="flex">
                    <p>07:00</p>
                    <i className="uil uil-lock-alt mx-2"></i>
                </div>
            </div>
            <div className="flex justify-between items-center p-2 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer">
                <div className="flex">
                    <i className="uil uil-youtube mx-2"></i>
                    <p>Basic Definitions</p>
                </div>
                <div className="flex">
                    <p>07:00</p>
                    <i className="uil uil-lock-alt mx-2"></i>
                </div>
            </div>
        </div> */}
    </>
  )
}
