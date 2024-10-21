import React from 'react'
import Card from './Card'
import Image1 from "../../assets/image-1.png"
import Image2 from "../../assets/image-2.png"
import Image3 from "../../assets/image-3.png"

const data = [
    {
        image: Image1,
        title: "Convallis non viverra sit mauris pellentesque.",
        desc: "Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet. "
    },
    {
        image: Image2,
        title: "Convallis non viverra sit mauris pellentesque.",
        desc: "Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet. "
    },
    {
        image: Image3,
        title: "Convallis non viverra sit mauris pellentesque.",
        desc: "Dictum non massa ullamcorper elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed morbi ut semper sed aliquet. "
    },
]
const FeatureCard = () => {
    return (
        <div className='p-10 flex flex-col gap-5'>
            <div className='max-w-[800px]'>
                <h1 className='red-rose-bold text-title text-[25px] md:text-[35px]'>Quam elementum risus in gravida ultrices commodo risus proin aliquet suspen</h1>
            </div>
            <div className='flex flex-wrap gap-3 md:gap-0 justify-between '>
               {data.map((item, index)=>(
                 <Card item={item} />
               ))}
            </div>
        </div>
    )
}

export default FeatureCard