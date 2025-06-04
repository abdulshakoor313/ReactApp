import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
    <div className='h-16 bg-green-500 items-center flex justify-between'>
      <div>
        <img src='/App/favicon.ico' alt='logo'/>
      </div>
      <div className='flex gap-10 px-5'>
         <Link href="/">Home</Link>
        <Link href="/About">Abous us</Link>
        <Link href="/Courses">Courses</Link>
        <Link href="/Products">Producs</Link>
        <Link href="/Account">Account</Link>
      </div>
    </div>

   
    </>

  )
}

export default Header
