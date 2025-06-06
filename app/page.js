"use client"
import React, {useState} from 'react'
import axios from 'axios'
const Page = ()=>{
  const [images, setimages] = useState([''])
  const getImages = async ()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setimages(data);
      console.log(data);
    } catch (error) {
      
    }
  }
  return(
    <>
    <button 
    className='px-10 py-10 bg-green-600 mt-50 ml-50 text-white'
    onClick={getImages}>Imges</button>
    <div>
      {images.map((elum,i)=>{
        return <img
        key={i}
        src={elum.download_url}
        width={400}
        height={400}
        className='p-4 inline-block'      
        
        
        />
      })}
    </div>
    
    </>
  )
}
export default Page;