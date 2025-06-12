"use client"
import React, {useState}from 'react'

const page = () => {
  const [username, setusername] = useState("")
  return (

    <>
    <h1 className='font-bold text-4xl mb-2.5'> Enter your name</h1>
    <form>
      <input 
      type='text' 
      value={username}
      className='p-4 border-2 border-zinc-200'
      onChange={(ab)=>{
      setusername(ab.target.value);

      }}
      />
    </form>
    </>
  )
}

export default page
