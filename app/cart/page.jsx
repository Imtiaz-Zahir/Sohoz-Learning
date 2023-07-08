import React from 'react'

export default function page() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
        <div className="lg:w-2/3 flex flex-col">
            <table>
                <thead className="bg-slate-100">
                    <tr className="text-center font-bold text-xl">
                        <td className="p-2"></td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Product</td>
                        <td className="p-2">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-20 border-b border-slate-400 text-center text-lg">
                        <td><i className="uil uil-times text-red-700 text-xl cursor-pointer"></i></td>
                        <td className="flex justify-center my-2"><img className="h-16 m-0"
                                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-8.jpg"
                                alt=""/></td>
                        <td>User Experience Design Essentials</td>
                        <td>$12.00</td>
                    </tr>
                    <tr className="h-20 border-b border-slate-400 text-center text-lg">
                        <td><i className="uil uil-times text-red-700 text-xl cursor-pointer"></i></td>
                        <td className="flex justify-center my-2"><img className="h-16 m-0"
                                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-8.jpg"
                                alt=""/></td>
                        <td>User Experience Design Essentials</td>
                        <td>$12.00</td>
                    </tr>
                    <tr className="h-20 border-b border-slate-400 text-center text-lg">
                        <td><i className="uil uil-times text-red-700 text-xl cursor-pointer"></i></td>
                        <td className="flex justify-center my-2"><img className="h-16 m-0"
                                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-8.jpg"
                                alt=""/></td>
                        <td>User Experience Design Essentials</td>
                        <td>$12.00</td>
                    </tr>
                    <tr className="h-20 border-b border-slate-400 text-center text-lg">
                        <td><i className="uil uil-times text-red-700 text-xl cursor-pointer"></i></td>
                        <td className="flex justify-center my-2"><img className="h-16 m-0"
                                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-8.jpg"
                                alt=""/></td>
                        <td>User Experience Design Essentials</td>
                        <td>$12.00</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex my-4">
                <input className="mx-4 p-2  border border-slate-400 rounded-sm font-medium" type="text" name="" id="" placeholder="Coupon code"/>
                <button className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-sm">APPLY COUPON</button>
            </div>
        </div>

        <div className="lg:w-[30%] w-full">
            <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
            <div className="rounded-md border border-slate-400">
                <div 
                    className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                    <p>Subtotal</p>
                    <p className="font-bold">$41.00</p>
                </div>
                <div 
                    className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                    <p>Coupon</p>
                    <p className="font-bold">-$0.00</p>
                </div>
                <div 
                    className="grid grid-cols-2 border-b border-slate-400 items-center text-center text-lg p-4">
                    <p>Total</p>
                    <p className="font-bold">$41.00</p>
                </div>
            </div>
            <a href=""><button className="py-4 px-6 bg-orange-500 text-white hover:bg-blue-900 font-bold rounded-md w-full my-2">PROCEED TO CHECKOUT</button></a>
        </div>
    </section>
  )
}
