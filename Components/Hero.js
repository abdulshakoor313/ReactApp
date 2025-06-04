"use client";


import React, {useState} from 'react'

const Hero = () => {
    const [imgUrl, setImgUrl] = useState('https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const handleChangeImage = () => {
  setImgUrl('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e');
};

  return (
    <>
    <div className='p-4 mt-20'>
      <img src={imgUrl}
      alt='HeroImg'
      />
    </div>
    <button onClick={handleChangeImage}>Change Image</button>
    </>
  )
}

export default Hero


