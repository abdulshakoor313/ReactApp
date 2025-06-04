  "use client"

  import axios from 'axios'
  import React,{useState} from 'react'

  const page = () => {
    const [images, setimages] = useState([''])
    const getImages = async()=>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    console.log(images);
    setimages(data);
      } catch (error) {
        console.error("Error to fetch data");
        
      }
    }
    return (
      <>
      <div>
        <button onClick={getImages} className='px-10 py-10 bg-green-600 mt-50 ml-50 text-white'>Get images</button>
        <div className='p-10'>
          {images.map((elum,i)=>{
           return <img
          key={i}
          src={elum.download_url}
          width={300}
          height={300}
          className='m-10 rounded inline-block  '
           
           
           />
          })}
        </div>
      </div>
      
      </>
    )
  }

  export default page;