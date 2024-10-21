import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-[350px] h-[450px] bg-primary flex flex-col justify-between  hover:bg-secondary group'>
        <div>
            <img src={item.image} alt='image' />
        </div>
        <div className='flex justify-between p-2'>
         <p className='p-2 bg-secondary group-hover:bg-white transition-colors'>Blog</p>
         <p className='p-2'>22.05.2024</p>
        </div>
        <p className='px-4 red-rose-bold font-bold'>{item.title}</p>
        <p className='px-4'>{item.desc}</p>

    </div>
  )
}

export default Card