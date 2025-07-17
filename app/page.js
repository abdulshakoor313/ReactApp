import React from 'react'
import Student from "@/app/Student/page"
// use path alias or relative path
import { db } from "@/lib/firebase";


const page = () => {
  return (
<>
<Student/>

</>
  )
}

export default page
