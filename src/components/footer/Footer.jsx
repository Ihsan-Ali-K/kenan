import React from 'react'
import LinkedIn from "../../assets/Linkdin.png"
import Facebook from "../../assets/Facebook.png"
import Instagram from "../../assets/Instagram.png"
import Youtube from "../../assets/Youtube.png"
import Tiktok from "../../assets/Tiktok.png"
const Footer = () => {
  return (
    <div className='p-5 bg-primary flex flex-col md:flex-row justify-between flex-wrap'>
      
            <div className='flex p-10'>
               <div className='flex flex-col  gap-3'>
               <h6 className='font-bold'>Xidmətlər</h6>
                <a href='' >Bazar araşdırması </a>
                <a href='' > Biznes görüşlərin təşkili</a>
                <a href='' >Özbəkistana səfər </a>
                <a href='' >Sərgilərin keçirilməsi</a>
                <a href='' >Özbəkistanda Marketinq </a>
               </div>
            </div>
            <div className='flex flex-col p-10 gap-3'>
                <h6 className='font-bold'>Haqqımızda</h6>
                <a href='' >Ticarət evi haqqında </a>
                <a href='' > Məqsəd və dəyərlər</a>
                <a href='' >Rəhbərin müraciəti</a>
                <a href='' >Korporativ struktur</a>
                <a href='' >Uğurlar / Sertifikatlar</a>
            </div>
            <div className='flex flex-col p-10 gap-3'>
                <h6 className='font-bold'>Media Mərkəzi</h6>
                <a href='' >KİV </a>
                <a href='' >Xəbər</a>
              
            </div>
            <div className='flex flex-col p-10 gap-3'>
                <a href='' className='font-bold'>Üzvlər</a>
                <a href='' className='font-bold'>Tədbirlər</a>
                <a href='' className='font-bold'>Üzvlük</a>
                <a href='' className='font-bold'>Əlaqə</a>
               
              
            </div>
            <div className='flex flex-col gap-5 justify-end items-center p-10 '>
            <div className='flex gap-3' >
            <img src={LinkedIn} alt='linkedin' />
              <img src={Facebook} alt='Facebook' />
              <img src={Instagram} alt='Instagram' />
              <img src={Youtube} alt='Youtube' />
              <img src={Tiktok} alt='Tiktok' />
            </div>
            <p>Abbas Fatullayev küç. 62C</p>
            </div>
        

    </div>
  )
}

export default Footer