'use client'
import React, { useEffect, useState } from 'react'
import { UilTrashAlt } from '@iconscout/react-unicons'

const course = [
    {
        id: 1,
        img: "https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-8.jpg",
        title: "User Experience Design Essentials",
        price: 1200
    }
]

export default function Page() {
    const [data, setdata] = useState(course);
    const [subtotal, setsubtotal] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [total, settotal] = useState(0);
    // let sum = 0;
    // useEffect(() => {
    //     setsubtotal(() => {
    //         data.map((item) => {
    //             sum += item.price;
    //         })
    //         return sum;
    //     });
    //     setdiscount(0);
    //     settotal(sum - discount);
    // }, data);
    // const submit = (m) => {
    //     m.preventDefault()
    //     console.log(m.target.firstChild.value)
    //     setdiscount(100)
    //     settotal(subtotal - 100)
    // }
    // const delet=(id)=>{
    //     const index=data.findIndex(Object=>{return Object.id===id});
    //     setdata(data.splice(index,1))
    // }

    return (
        <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
            <div className="lg:w-2/3 flex flex-col">
                <table>
                    <thead className="bg-slate-100">
                        <tr className="text-center font-bold text-xl">
                            <td className="p-2">Image</td>
                            <td className="p-2">Product</td>
                            <td className="p-2">Price</td>
                            <td className="p-2"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ id, img, title, price }) => {
                            return (
                                <tr key={id} className="h-20 border-b border-slate-400 text-center text-lg">
                                    <td className="flex justify-center my-2"><img className="h-16 m-0"
                                        src={img}
                                        alt={title} /></td>
                                    <td>{title}</td>
                                    <td>৳ {price}</td>
                                    <td><UilTrashAlt className="hover:text-orange-500 cursor-pointer"/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <form className="flex my-4">
                    <input className="mx-4 p-2  border border-slate-400 rounded-sm font-medium" type="text" name="Coupon" placeholder="Coupon code" />
                    <button type='submit' className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-sm">APPLY COUPON</button>
                </form>
            </div>

            <div className="lg:w-[30%] w-full">
                <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
                <div className="rounded-md border border-slate-400">
                    <div
                        className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                        <p>Subtotal</p>
                        <span className="font-bold">৳ {subtotal}</span>
                    </div>
                    <div
                        className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                        <p>Discount</p>
                        <span className="font-bold">৳ {discount}</span>
                    </div>
                    <div
                        className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                        <p>Total</p>
                        <span className="font-bold">৳ {total}</span>
                    </div>
                </div>
                <a href=""><button className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-md w-full my-2">PROCEED TO CHECKOUT</button></a>
            </div>
        </section>
    )
}
