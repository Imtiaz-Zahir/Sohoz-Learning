import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseContainer() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
                <Link to="/course"><img className="w-full" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-9.jpg"
                    alt=""/></Link>
                <div className="p-4">
                    <div className="flex text-lg">
                        <span className="text-orange-400">
                            <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                            <i className="uis uis-star"></i><i className="uil uil-star"></i>
                        </span>
                        <h4 className="mx-4 font-semibold">4.00</h4>
                        <p className="text-slate-600 font-medium">(11)</p>
                    </div>
                    <Link to="/course"><h1 className="font-bold text-xl my-3 hover:text-orange-500">Ultimate Photoshop Training: From Beginner</h1></Link>
                    <div className="flex text-slate-600 font-medium">
                        <p className="mr-4"><i className="uil uil-user"></i>56</p>
                        <p><i className="uil uil-clock-three"></i>02h 20m</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <div className="rounded-full w-12 h-12 bg-orange-600 mr-4 text-white flex justify-center items-center text-xl font-semibold">A</div>
                        <p className="text-slate-600 font-medium mr-1">By</p>
                        <a className="text-xl font-semibold hover:text-orange-500" href="#">Amir</a>
                    </div>
                </div>
                <hr/>
                <div className="p-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-orange-500">$19.00</p>
                    <div className="bg-slate-200 rounded-lg font-medium py-2 px-3 cursor-pointer hover:bg-orange-600 hover:text-white"><i className="fa-solid fa-cart-shopping"></i>Add to cart</div>
                </div>
            </div>
  )
}
