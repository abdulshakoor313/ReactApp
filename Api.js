"use client"
import axios from "axios"
import React,{useState} from "react"
const Page = ()=>{
const [images, setgetImages] = useState([''])
const getImages = async()=>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    console.log(data);
    setgetImages(data);

  } catch (error) {
    console.error("Error to fetch data");
  }

}
  return(
    <>
    <button onClick={getImages} className='px-10 py-10 bg-green-600 mt-50 ml-50 text-white'>Images</button>
    <div>
      {images.map((elum,i)=>{
        return <img
        key={i}
        src={elum.download_url}
        width={400}
        height={400}
        className='m-10 rounded inline-block  '

        
        />
      })}
    </div>
    </>

  )
}
export default Page;