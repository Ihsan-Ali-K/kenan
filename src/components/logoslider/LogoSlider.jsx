import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import Logo1 from "../../assets/logo-1.png";
import Logo2 from "../../assets/logo-3.png";
import Logo3 from "../../assets/logo-4.png";
import next from "../../assets/next.png";
import previous from "../../assets/previous.png";

const logos = [
    { name: 'logo', image: Logo },
    { name: 'logo', image: Logo1 },
    { name: 'logo', image: Logo2 },
    { name: 'logo', image: Logo3 },
    { name: 'logo', image: Logo3 },
    { name: 'logo', image: Logo1 },
    { name: 'logo', image: Logo2 },
    { name: 'logo', image: Logo },
];

const LogoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of logos visible at a time based on screen size
    const visibleLogos = window.innerWidth < 540 ? 2 : 4;
    const totalLogos = logos.length;

    const handleNext = () => {
        if (currentIndex + visibleLogos < totalLogos) {
            setCurrentIndex(currentIndex + visibleLogos);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - visibleLogos >= 0) {
            setCurrentIndex(currentIndex - visibleLogos);
        }
    };

    return (
        <div className='p-10 flex flex-col gap-5'>
            <div className='overflow-hidden'>
                <div 
                    className={`flex gap-5 transition-transform duration-1000 ease-in-out`} 
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)` }}
                >
                    {
                        logos.map((item, index) => (
                            <div key={index} className='w-[150px] h-[100px] md:w-[300px] md:h-[160px] bg-primary flex-shrink-0 flex justify-center items-center'>
                                <img src={item.image} alt={item.name} className='object-contain '/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-end gap-3 h-4'>
                <img 
                    src={previous} 
                    alt='previous' 
                    className={`cursor-pointer ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`} 
                    onClick={handlePrevious} 
                />
                <p>{Math.ceil(currentIndex / visibleLogos) + 1}/{Math.ceil(totalLogos / visibleLogos)}</p>
                <img 
                    src={next} 
                    alt='next' 
                    className={`cursor-pointer ${(currentIndex + visibleLogos >= totalLogos) && 'opacity-50 cursor-not-allowed'}`} 
                    onClick={handleNext} 
                />
            </div>
        </div>
    );
};

export default LogoSlider;
