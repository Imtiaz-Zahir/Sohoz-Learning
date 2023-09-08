"use client";
import React, { useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Page() {
  const { id, title, price, image } = JSON.parse(
    sessionStorage.getItem("course")
  );
  const [discount, setDiscount] = React.useState(0);
  let uid=useRef();

  useEffect(() => {
    async function islogin() {
      const session = await fetch("/api/auth/session").then((res) =>
        res.json()
      );
      !session.user && signIn(undefined, { callbackUrl: "/checkout" });
      uid.current= await session.user.id;
    }
    islogin();
  }, []);
  function cupon(e) {
    e.preventDefault();
    const cupon = e.target[0].value;
    setDiscount(cupon);
    // fetch("/api/cupon",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({cupon})
    // }).then(res=>res.json()).then(data=>{
    //   setDiscount(data.discount)
    // })
  }
  async function enroll() {
    const res=await fetch('/api/enrollments',{
      method:"POST",
      body:JSON.stringify({
        usersId:uid.current,
        coursesId:id,
      })
    })
    alert(res.status===201?"enroll success":"enroll failed")
  }

  return (
    <section className="w-full py-20 px-0 xs:px-2 sm:px-6 lg:px-20">
      <div className="md:w-[640px] mx-auto border-2 border-slate-400 px-12 pb-12">
        <h1 className="text-center text-5xl font-semibold my-10">Chackout</h1>
        <div className="flex justify-between items-center text-xl font-bold my-4">
          <div className="flex items-center gap-4">
            <Image
              src={`/course/${image}`}
              width={100}
              height={70}
              alt={title}
            />
            <p>{title}</p>
          </div>
          <div className="flex justify-between items-center text-xl font-bold w-[250px]">
            <p>Price</p>
            <span>৳ {price}</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          <form onSubmit={cupon} className="flex items-center">
            <input
              type="text"
              className="h-10 border border-slate-400 focus:outline-none pl-2"
              placeholder="cupon"
            />
            <button
              type="submit"
              className="bg-orange-500 text-black h-10 px-4"
            >
              apply
            </button>
          </form>
          <div className="flex justify-between items-center text-xl font-bold w-[250px]">
            <p>Discount</p>
            <span>৳ {discount}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-xl font-bold w-[250px] ml-auto my-4">
          <p>Total</p>
          <span>৳ {price - discount}</span>
        </div>
        <hr className="my-4" />
        <h1 className="text-center text-2xl font-semibold my-4">
          Select Payment Method
        </h1>
        <div className="flex justify-center">
          <button onClick={enroll} className="px-10 py-2 bg-orange-500 text-white rounded-md font-bold text-lg">
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
}
