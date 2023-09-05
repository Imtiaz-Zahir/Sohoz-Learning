'use client'
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { UisStar, UisStarHalfAlt } from '@iconscout/react-unicons-solid';
import { UilClockThree, UilUser, UilShoppingCart, UilStar } from '@iconscout/react-unicons';
import { cartContext } from '@/app/context';

const star = (reviews) => {
  const stars = [];
  let sum=0;
  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i].rating;
  }
  const rating = sum / reviews.length;
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<UisStar key={index} />);
    } else if (index - rating <= 0.5) {
      stars.push(<UisStarHalfAlt key={index} />);
    } else {
      stars.push(<UilStar key={index} />);
    }
  }
  return stars;
};

export default function CourseContainerHome({ data, session }) {

  const { setCartItem } = useContext(cartContext);

  const [inCart, setInCart] = useState()

  useEffect(() => {
    const cartCourse = JSON.parse(sessionStorage.getItem("cartCours"));
    const inses = cartCourse === null ? -1 : cartCourse.findIndex(Object => { return Object.id === data.id }); setInCart(inses >= 0)
  }, [])
  const router = useRouter();

const addCart = async () => {
  const myobj = {
    id: data.id,
    img: data.image,
    title: data.title,
    price: data.price
  };
  const cartCours = await sessionStorage.getItem("cartCours");
  let myArrayFromStorage = await JSON.parse(cartCours);
  await cartCours === null ? myArrayFromStorage = [myobj] : myArrayFromStorage.push(myobj);
  const jsonString = await JSON.stringify(myArrayFromStorage);
  session?await fetch(`http://localhost/oursite/apis/updatecart.php?email=${session.user.email}&data=${jsonString}`):null
  await sessionStorage.setItem("cartCours", jsonString);
  setInCart(true);
  setCartItem(myArrayFromStorage.length);
  await router.push('/cart');
}

  return (
    <div key={data.id} className="p-4 bg-cyan-50 rounded-xl max-w-[350px] mx-auto my-5">
      <Image className="w-full rounded-xl" src={`/course/${data.image}`} alt={data.title} height={300} width={350} />
      <div className="px-4 mt-4">
        <Link href={`/courses/${data.id}`} className="text-2xl hover:text-orange-500 transition-all font-bold">{data.title}</Link>
        <div className="flex items-center justify-between my-4 text-lg">
          <span className="text-orange-400 flex">
            {star(data.reviews).map((data) => { return data })}
          </span>
          <p className="text-slate-600 font-medium">({data.reviews.length} Reviews)</p>
        </div>
        <div className="flex items-center justify-between text-slate-600 mb-2">
          <span className="flex items-center gap-1">
            <UilClockThree size='20' />{data.duration}
          </span>
          <p className="text-slate-600 font-medium flex gap-1 items-center">
            <UilUser size='18' />{data.enrollments.length}
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-2">
          <p className="text-orange-500 text-2xl font-bold">৳ {data.price}</p>
          {inCart ? <Link href="/cart" className="bg-slate-200 rounded-lg font-semibold p-2 cursor-pointer hover:bg-orange-600 hover:text-white transition-all">View Cart</Link> :
            <span onClick={addCart} className="bg-slate-200 rounded-lg font-semibold p-2 cursor-pointer hover:bg-orange-600 hover:text-white flex items-center transition-all"><UilShoppingCart size="16" />Add to cart</span>}
        </div>
      </div>
    </div>
  );
}
