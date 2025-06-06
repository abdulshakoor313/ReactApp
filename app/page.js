"use client"
import React,{useState} from 'react'
import axios from 'axios'
const Page = ()=>{
const [images, setimages] = useState(['']);
const getImages = async ()=>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    console.log(data);
    setimages(data);
    
  } catch (error) {
    console.log("Error") 
  }}

  return(
    <>
    <button onClick={getImages}> Images</button>
    {images.map((elum,i)=>{
      return
      <img
      key={i}
      src={elum.download_url}
      width={500}
      height={600}
      
      />
    })}
    </>
    )
}

export default Page;