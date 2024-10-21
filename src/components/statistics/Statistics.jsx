import React from 'react'

const Statistics = () => {
  return (
    <div className='w-full p-5 py-10 md:px-12 flex-col flex  md:flex-row justify-between '>
      <div className='md:w-1/2 grid md:gap-10'>
        <p
          className='red-rose-bold text-[25px] md:text-[35px] text-wrap  text-title '
        >Quam elementum risus in gravida ultrices commodo risus proin aliquet suspen</p>
        <p className='text-[16px] max-w-96'>Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet. </p>
      </div>
      <div className='md:w-1/2 flex gap-10 justify-center '>
        <div className='flex flex-col justify-between p-5 w-full '>
          <div className='p-5 border-b-2 border-gray-400'>

            <p className='text-[50px] font-bold '>11+</p>
            <p className='text-title'>Xidmət sayı</p>

          </div>

          <div className='p-5 '>
            <p className='text-[50px] font-bold '>11+</p>
            <p className='text-title'>Xidmət sayı</p>
          </div>
        </div>
        <div className='w-1 bg-gray-400 '></div>
        <div className=' flex flex-col justify-between p-5 w-full '>
          <div className='p-5 border-b-2  border-gray-400 '>
            <p className='text-[50px] font-bold '>11+</p>
            <p className='text-title'>Xidmət sayı</p>

          </div>


          <div className='p-5 '>
            <p className='text-[50px] font-bold '>11+</p>
            <p className='text-title'>Xidmət sayı</p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Statistics