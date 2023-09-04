"use client"
import React from 'react'

export default async function page() {
    
  const res= await fetch("/api/blogs",{
    method:"POST",
    body:JSON.stringify({
      author:"Adam Smith",
      image:"blog-5-1200x600.jpg",
      title:"How To Start Learning Programming",
      content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra.",
    })
  });
  console.log(await res.json());
  return (
    <div>page</div>
  )
}
