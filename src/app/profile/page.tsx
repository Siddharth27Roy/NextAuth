'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {

    const router = useRouter();
    const [data, setData] = useState("na");

    const getUserData = async () => {
        const res = await axios.post("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout Successfull");
            router.push("/login")
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center max-h-screen py-2'>
            <h1>Profile Page</h1>
            <hr />
            <h2>{data === "na" ? "No data for display" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button className='bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' 
            onClick={getUserData}>Get Data</button>
            <button className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
            onClick={logout}>Logout</button>
        </div>
    )
}
