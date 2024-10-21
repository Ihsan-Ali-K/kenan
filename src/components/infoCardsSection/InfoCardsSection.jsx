import React from 'react'
import ReadMore from "../../assets/read-more.png"
const InfoCardsSection = () => {
    const data = [
        {
            title: "Bazar araşdırması",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },
        {
            title: "Biznes görüşlərin təşkili",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },
        {
            title: "Özbəkistana səfər",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },
        {
            title: "Özbəkistanda Marketinq",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },
        {
            title: "Sərgilərin keçirilməsi",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },
        {
            title: "Sənədləşmə və logistika",
            description: "elementum sit adipiscing quam enim  dolor sit amet consectetur dolor sed"
        },

    ]
    return (
        <div className='p-10'>
            <div className='py-5 max-w-[800px]'>
                <p className='red-rose-bold text-[25px] md:text-[35px] text-title'>Quam elementum risus in gravida ultrices commodo risus proin aliquet suspen</p>
            </div>
           <div className='flex flex-wrap justify-between gap-x-3 gap-y-5 '>
           {
                data.map((item, index) => (
                    <div className='h-[200px] w-[400px] bg-primary p-5 hover:bg-secondary transition-colors flex flex-col justify-between'>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <hr></hr>
                        <img src={ReadMore} alt='read-more' className='h-4 w-8 cursor-pointer self-end' />

                    </div>
                ))
            }
           </div>
        </div>
    )
}

export default InfoCardsSection