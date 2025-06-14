"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // You can install lucide-react or use any icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-green-500'>
      <div className='h-16 flex justify-between items-center px-4 md:px-8'>
        <div>
          <img src='/App/favicon.ico' alt='logo' className='h-10 w-10' />
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-6 text-white'>
          <Link href="/">Home</Link>
          <Link href="/About">About me</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/Books">Books</Link>
          <Link href="/Account">Account</Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-white'>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className='md:hidden flex flex-col gap-4 bg-green-600 px-4 py-3 text-white'>
          <Link href="/">Home</Link>
          <Link href="/About">About me</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/Books">Books</Link>
          <Link href="/Account">Account</Link>
        </nav>
      )}
    </header>
  )
}

export default Header
