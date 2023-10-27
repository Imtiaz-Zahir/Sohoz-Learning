'use client'
import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { cartContext } from '@/app/context';

export default function Page() {
    const { setCartItem } = useContext(cartContext);

    const [data, setdata] = useState([]);
    const [subtotal, setsubtotal] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const jsonStringFromStorage = sessionStorage.getItem("cartCours");
        const course = JSON.parse(jsonStringFromStorage);
        course?setdata(course):null;
    }, []);

    useEffect(() => {
        let sum = 0;
        data ? data.forEach((data) => {
            sum += Number(data.price);
        }) : "";
        setsubtotal(sum);
        settotal(sum - discount);
    }, [data])
    const dis = (m) => {
        m.preventDefault();
        setdiscount(m.target.firstChild.value);
        settotal(subtotal-m.target.firstChild.value);
    }

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
                        {data.length!==0 ? data.map(({ id, img, title, price }, index) => {
                            return (
                                <tr key={index} className="h-20 border-b border-slate-400 text-center text-lg">
                                    <td className="flex justify-center my-2"><Image height={64} width={96}
                                        src={`/course/${img}`}
                                        alt={title} /></td>
                                    <td>{title}</td>
                                    <td>৳ {price}</td>
                                    <td><UilTrashAlt onClick={async () => {
                                        const index = await data.findIndex(Object => { return Object.id === id });
                                        let arr = []
                                        for (let i = 0; i < data.length; i++) {
                                            i === index ? "" : arr.push(data[i]);
                                        }
                                        setdata(arr);
                                        const jsonString = await JSON.stringify(arr);
                                        await sessionStorage.setItem("cartCours", jsonString);
                                        await setCartItem(arr.length);
                                    }} className="hover:text-orange-500 cursor-pointer" /></td>
                                </tr>
                            )
                        }) : <tr className='my-4 text-xl'>No item in cart</tr>}
                    </tbody>
                </table>
                {data.length!==0 ?<form className="flex my-4" onSubmit={dis}>
                    <input className="mx-4 p-2 border border-slate-400 rounded-sm font-medium" type="text" name="Coupon" placeholder="Coupon code" />
                    <button type='submit' className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-sm">APPLY COUPON</button>
                </form>:null}
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
                <button className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-md w-full my-2">PROCEED TO CHECKOUT</button>
            </div>
        </section>
    )
}