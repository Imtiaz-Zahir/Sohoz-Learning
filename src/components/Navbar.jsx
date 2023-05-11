import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const items = [{
    name : "Courses",
    url : "/courses"
  },
  {
    name : "Webinars",
    url : "/webinars"
  },
  {
    name : "Blog",
    url : "/blogs"
  },
  {
    name : "About Us",
    url : "/about"
  },
  {
    name : "Contact",
    url : "/contact"
  }];

export default function Navbar() {

  const navItem = items.map((item,index) => {
    return(
      <li className="mx-4 font-bold hover:text-orange-600" key={index}><Link to={item.url}>{item.name}</Link></li>
    )
  });

  return (
    <nav id="nav" className="flex w-full px-0 py-0 xs:py-1 sm:py-2 md:py-3 justify-between items-center fixed xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:20 bg-white">
      <Link to="./"><img className="h-10" src={logo} alt="Sohoz Leaning" /></Link>
      <div className="flex">
        <div className="lg:hidden my-2 md:my-1">
          <i className="fa-solid fa-user bg-orange-500 text-white p-2 md:p-3 mx-1 xs:mx-2 rounded-md"></i>
          <i className="fa-solid border border-orange-500 md:p-3 fa-bars p-2 rounded-md"></i>
        </div>
        <ul className="items-center text-lg hidden lg:flex">
          {navItem}
          <Link to="./cart"><li className="mx-4 font-bold hover:text-orange-600 cursor-pointer text-2xl flex"><i
            className="fa-solid fa-cart-shopping"></i>
            <div className="h-5 w-5 bg-orange-500 rounded-full -ml-1 -mt-2 flex items-center justify-center text-sm text-white">5</div>
          </li></Link>
        </ul>
        <div className="hidden ml-8 px-6 bg-orange-500 py-2 rounded items-center font-semibold text-white lg:flex">
          <Link className="border-r-2 px-3 hover:text-black" to="./login">Login</Link>
          <Link className="px-3 hover:text-black" to="./register">Register</Link>
        </div>
      </div>
      {window.addEventListener("scroll", () => {
      document.getElementById("nav").classList.toggle("scroll", window.scrollY > 0)})}
    </nav>
  )
}
