import React, { useState } from 'react'
import Bars from "../../assets/bars.png"
import Logo from "../../assets/Vector.png"
import Search from "../../assets/Search.png"
import Dropdown from './Dropdown'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
    const [search, setSearch]  = useState(false)
    return (
        <div className='h-24 px-5 md:px-12 w-full flex justify-between items-center'>
            <img src={Bars} alt='bars' className='h-2' />
            <div>
                <img src={Logo} alt='logo' className='h-14 md:h-20' />
                <p></p>
            </div>
            <div className='flex gap-3 '>
                {search === true && <input type='text' className='absolute top-7 right-32 w-300px h-12 rounded-md active:outline-none p-2 outline-none border-2 border-secondary ' placeholder='search here' />}
                { 
                search ===false ?
                <img src={Search} alt='search' className='h-6 cursor-pointer ' onClick={()=>setSearch(true)} /> 
                :
                <IoMdClose className='cursor-pointer' size={24} onClick={()=>setSearch(false)} />    
            }
                <Dropdown />
            </div>

        </div>
    )
}

export default Navbar