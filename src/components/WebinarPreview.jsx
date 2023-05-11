import React from 'react'
import { Link } from 'react-router-dom'

export default function WebinarPreview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 items-center rounded-xl web">
            <img className="rounded-lg w-full" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/webinar-img-2.jpg" alt="" />
            <div>
                <Link className="hover:text-orange-500" to="/webinar"><h2 className="text-2xl font-bold">Web Programming Career Guideline</h2></Link>
                <div className="flex my-4 text-orange-500 font-semibold">
                    <i className="uil uil-calendar-alt"></i><p className="mx-2">12 May, 2021</p>
                    <i className="uil uil-clock"></i><p className="mx-2">10:00 PM</p>
                </div>
                <p className="text-lg text-slate-500 font-medium">Donec nec justo eget felis facilisis. Aliquam porttitor mauris sit amet orci.</p>
                <Link to="/webinar"><div className="border-orange-500 border hover:bg-orange-500 hover:text-white font-bold text-xl text-orange-500 text-center py-2 w-36 rounded-md my-4">Read More</div></Link>
            </div>
        </div>
    )
}
