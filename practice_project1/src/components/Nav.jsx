
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

function NavContent() {
  const pathName = usePathname()

  return (
    // Yahan apna existing navbar JSX rakh
    <nav className="w-full h-[80px] bg-white flex items-center justify-between px-5 fixed top-0">
      <div className="text-black font-bold text-2xl">
        Travel Guide
      </div>

      <ul className="flex items-center gap-5 px-9 font-semibold">
        <li>
          <Link href="/" className={pathName === "/" ? "text-blue-500" : "text-black"}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/destinations" className={pathName === "/destinations" ? "text-blue-500" : "text-black"}>
            Destinations
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathName === "/contact" ? "text-blue-500" : "text-black"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default function Nav() {
  return (
    <Suspense fallback={<div className="h-[80px] bg-white" />}>
      <NavContent />
    </Suspense>
  )
}
