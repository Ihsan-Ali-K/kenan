import React from 'react'
import Image from '../../assets/hero.png'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='   relative w-full md:h-[calc(100vh-6rem)] '>
      <img src={Image} alt='image' className=' object-fill w-full h-full ' />
      <p className='red-rose-bold text-white absolute top-16 md:top-24 left-1/2 transform -translate-x-1/2 text-lg leading-tight md:text-[50px] text-center '>Congue nonera lectus
        ut titencidunt quis
        morbi placerat</p>
    </div>
  )
}

export default Hero