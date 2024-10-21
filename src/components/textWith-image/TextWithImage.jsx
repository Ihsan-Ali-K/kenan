import React from 'react'
import Image1 from "../../assets/clip-path.png"
import Image2 from "../../assets/image.png"
import next from "../../assets/right.png"
import previous from "../../assets/left.png"

const TextWithCard = () => {
  
  return (
    <div className='p-10'>

      <div className=' flex flex-row flex-wrap  bg-primary '>
        <div className='md:w-1/2 p-5 flex flex-col gap-2 md:gap-10 '>

          <h1 className='red-rose-bold text-[25px] md:text-[35px]'>Gravida ultrices risus proin aliquet suspen consectetur dolor sed morbi</h1>
          <p className='max-w-[400px]'>Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet. </p>
        </div>
        <div className='relative md:w-1/2 flex h-full justify-end overflow-hidden'>
          
          <img src={Image1} alt='imageone' className='object-cover md:flex h-[350px] md:w-auto w-[50px]  ' />

         
          <div className='relative w-full md:w-auto'>
            <img src={Image2} alt='imagetwo' className='object-cover h-[350px] w-full md:w-auto' />

           
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 p-2'>
              <img src={previous} className='h-4 cursor-pointer' alt='Previous' />
              <p className='text-white'>1/3</p>
              <img src={next} className='h-4 cursor-pointer' alt='Next' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TextWithCard