import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {
    const pathName = usePathname();
  return (
    <div className='w-full h-[80px] bg-white flex items-center justify-between px-5'>
       <div className='text-black font-bold text-2xl'>
        Travel Guide
       </div>
       <ul className='flex items-center gap-5 px-9 font-semibold'>
       <Link href={"/"} className={pathName=="/"? text-blue-500:""}><li>Home</li></Link> 
        <Link href={"/destinations"} className={pathName=="/destination"? text-blue-500:""}><li>Destinations</li></Link> 
       <Link href={"/contact"}className={pathName=="/contact"? text-blue-500:""}><li>Contact</li></Link> 
       </ul>
    </div>
    
  )
}

export default Nav
