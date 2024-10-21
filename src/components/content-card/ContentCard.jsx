import React from 'react'
import Image from "../../assets/big-image.png"
const ContentCard = () => {
    return (
      <div className='p-10'>
          <div className='flex flex-wrap bg-primary '>
            <div className='flex flex-col justify-center items-center md:w-1/2 p-5 '>
                <h2 className='red-rose-bold text-title text-[25px] md:text-[35px] md:max-w-[350px]'>Risus in gravida ultrices commodo risus proin</h2>
                 <p className='md:max-w-[350px]'>Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet.   </p>

            </div>
            <div className='md:w-1/2'>
             <img src={Image} alt='image' className='object-fit'/>
            </div>

        </div>
      </div>
    )
}

export default ContentCard