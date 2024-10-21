import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('En'); // State to store the selected language

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="relative inline-block text-left h-6 text-[14px] z-10 ">
            <button
                type="button"
                className="inline-flex h-6 justify-between font-medium rounded-sm  focus:outline-none"
                onClick={toggleDropdown}
            >
                {selectedLanguage} {/* Display the selected language */}
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 rounded-md shadow-lg bg-white">
                    <div className="py-1">
                        <a
                            href="#"
                            className="block px-4 py-2 text-black hover:bg-secondary"
                            onClick={() => handleLanguageChange('En')}
                        >
                            En
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-black hover:bg-secondary"
                            onClick={() => handleLanguageChange('Fr')}
                        >
                            Fr
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
