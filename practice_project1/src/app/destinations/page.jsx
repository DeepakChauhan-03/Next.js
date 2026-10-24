'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const destination = ['Paris', 'Tokyo', 'NewYork']
 const router = useRouter();
  return (
    <div className='flex justify-center items-center text-white h-full flex-col gap-4'>
      <h1 className='text-white text-2xl'>
        Choose Your Destination
      </h1>

      <div className='flex flex-col gap-4'>
        {destination.map((d, index) => {
          return (
            <div 
              key={index}   
              className='w-50 h-25 text-black font-bold text-2xl
               flex items-center justify-center rounded-2xl bg-white 
               hover:opacity-[0.5] transition-all '
               onClick={()=>router.push(`/destinations/${d}`)}
            >
              {d} 
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
