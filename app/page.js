"use client"
import React, {useState} from 'react'
import axios from 'axios'
const Page = ()=>{
  const [images, setimgaes] = useState([''])
  const getImages = async ()=>{
    try {
      const respose = await axios.get("https://picsum.photos/v2/list");
      const data = respose.data;
      setimgaes(data);
      console.log(data);
      
    } catch (error) {
      console.log("Error")
      
    }





  }
  return (

<>
<button onClick={getImages}>Show Images</button>

<div>
{images.map((elum,i)=>{
  return <img
  key={i}
  src={elum.download_url}
  
  
  
  
  
  
  />
})}
  
</div>




</>

  )
}

export default Page;