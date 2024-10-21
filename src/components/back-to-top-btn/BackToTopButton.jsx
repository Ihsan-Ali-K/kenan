import React, { useState, useEffect } from 'react';
import Arrow from "../../assets/arrow-up.png"


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='fixed bottom-12 right-12 z-50 '>
      {isVisible && 
        <div className='flex items-center justify-center w-12 h-12 bg-button rounded-full cursor-pointer transition-opacity  ' onClick={scrollToTop}>
          <img src={Arrow} className='h-6'/>
        </div>
      }
    </div>
  );
};

export default BackToTopButton;
