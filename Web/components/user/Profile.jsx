import React from 'react'

export default function Profile({user}) {
  return (
    <div className="lg:p-6 lg:w-[80%]">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <div className="flex justify-between lg:justify-start">
                <div className="w-[25%]">
                    <p className="text-lg my-4 font-medium">Full Name</p>
                    {/* <p className="text-lg my-4 font-medium">Username</p> */}
                    <p className="text-lg my-4 font-medium">Email</p>
                    {/* <p className="text-lg my-4 font-medium">Phone Number</p> */}
                    {/* <p className="text-lg my-4 font-medium">Skill/Occupation</p> */}
                    {/* <p className="text-lg my-4 font-medium">Biography</p> */}
                </div>
                <div>
                    <p className="text-lg my-4 font-semibold">{user.name}</p>
                    {/* <p className="text-lg my-4 font-semibold">Bangladesh</p> */}
                    <p className="text-lg my-4 font-semibold">{user.email}</p>
                    {/* <p className="text-lg my-4 font-semibold">01792932818</p> */}
                    {/* <p className="text-lg my-4 font-semibold">Mobile apps Publisher</p> */}
                    {/* <p className="text-lg my-4 font-semibold">We are not hacker</p> */}

                </div>
            </div>
            <h2 className='text-xl font-semibold my-4'>Change Password:</h2>
            <form className='flex flex-col gap-2 max-w-screen-xs'>
                <input className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium" type="password" name="prvPass" placeholder='Old Password'/>
                <input className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium" type="password" name="newPass" placeholder='New Password'/>
                <input className="my-2 border border-slate-400 w-full h-8 rounded-md px-4 text-lg font-medium" type="password" name="conNewPass" placeholder='Confirm New Passowrd'/>
                <button type="submit" className='w-3/5 bg-orange-600 mx-auto py-2 font-semibold rounded-md'>Change Password</button>
            </form>
        </div>
  )
}
