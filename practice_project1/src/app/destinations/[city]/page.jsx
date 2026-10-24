'use client'
import { useParams } from 'next/navigation'
import React from 'react'

 const page = ({params}) => {
    const {city} = useParams(); 
  return (
    <div className='text-white w-[50%] mt-[100px]'>
       {city} is the beautiful city.
    </div>
  )
}

export default page
