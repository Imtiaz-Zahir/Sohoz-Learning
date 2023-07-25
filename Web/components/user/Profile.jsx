import React from 'react'

export default function Profile() {
  return (
    <div className="lg:p-6 lg:w-[80%]">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <div className="flex justify-between lg:justify-start">
                <div className="w-[25%]">
                    <p className="text-lg my-4 font-medium">Full Name</p>
                    <p className="text-lg my-4 font-medium">Username</p>
                    <p className="text-lg my-4 font-medium">Email</p>
                    <p className="text-lg my-4 font-medium">Phone Number</p>
                    <p className="text-lg my-4 font-medium">Skill/Occupation</p>
                    <p className="text-lg my-4 font-medium">Biography</p>
                </div>
                <div>
                    <p className="text-lg my-4 font-semibold">ksldfjlfd lsdflk</p>
                    <p className="text-lg my-4 font-semibold">Bangladesh</p>
                    <p className="text-lg my-4 font-semibold">admin</p>
                    <p className="text-lg my-4 font-semibold">01792932818</p>
                    <p className="text-lg my-4 font-semibold">Mobile apps Publisher</p>
                    <p className="text-lg my-4 font-semibold">We are not hacker</p>

                </div>
            </div>
        </div>
  )
}
