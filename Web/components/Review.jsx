import React from 'react';
import Image from 'next/image';
import { UisStar, UisStarHalfAlt } from '@iconscout/react-unicons-solid';
import { UilStar } from '@iconscout/react-unicons';

const star = (rating) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<UisStar key={index} />);
    } else if (index - rating <= 0.5 ) {
      stars.push(<UisStarHalfAlt key={index} />);
    } else {
      stars.push(<UilStar key={index} />);
    }
  }
  return stars;
};

export default function Review() {
    return (
        <div className="p-8 bg-white border border-slate-400 flex flex-col mx-auto items-start rounded-xl cha transition-all duration-500 max-w-[320px]">
            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" /></svg>
            <span className="text-orange-400 flex">
            {star(5).map((data)=>{return data})}
            </span>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet
                nibh nec urna. In nisi neque, aliquet vel, dapibus mattis.</p>
            <div className="flex items-center gap-6">
                <Image height={80} width={80} className="rounded-full"
                    src="/client-1.jpg" alt="Kane William" />
                <div>
                    <p className="text-xl mb-2 font-medium">Kane William</p>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    )
}
