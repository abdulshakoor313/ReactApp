"use client";

import React,{useState} from 'react'

const Practice = ({user}) => {
  const [marks, setmarks] = useState(80)

  return (
  <>
    <div>
      <h1>My marks were {marks}</h1>
    </div>
    <button onClick={()=>{setmarks(5000)}}>Update: {user}</button>
  </>
  )
}

export default Practice
