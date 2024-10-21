import React from 'react'
import Arrow from "../../assets/arrow.png"
const HorizonatalLine = ({start, end}) => {
    return (
        <div className="flex h-5 items-center gap-2 p-5">
            <div>
                <p>{start}</p>
            </div>
            <hr className='flex-1  border-t-2 border-gray-400 ' />
            <div>

                <p>{end}</p>
            </div>
            <div>
                <img src={Arrow} alt='arrow' className='cursor-pointer' />
            </div>

        </div>
    )
}

export default HorizonatalLine