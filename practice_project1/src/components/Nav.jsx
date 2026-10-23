'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {
  const pathName = usePathname();
  return (
    <div className='w-full h-[80px] bg-white flex items-center justify-between px-5 fixed top-0'>
      <div className='text-black font-bold text-2xl'>
        Travel Guide
      </div>
      <ul className='flex items-center gap-5 px-9 font-semibold'>
        <Link href="/" className={pathName === "/" ? "text-blue-500" : "text-black"}>
          <li>Home</li>
        </Link>
        <Link href="/destinations" className={pathName === "/destinations" ? "text-blue-500" : "text-black"}>
          <li>Destinations</li>
        </Link>
        <Link href="/contact" className={pathName === "/contact" ? "text-blue-500" : "text-black"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Nav