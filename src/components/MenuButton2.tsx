'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import menu_icon from '/public/img/menu_icon.png'
interface DropdownProps {
    options: string[];
}
  
const MenuButton2: React.FC<DropdownProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="fixed top-20 right-0 mt-4 mr-4">
        <div className="relative">
        <button
          className="rounded inline-flex items-center"
          onClick={toggleDropdown}
        >
          {}
          <Image src={menu_icon} alt="Menu Icon" width={150} height={150}/>
          {}
        </button>
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-custom-NavBarGreen rounded-lg shadow-xl z-100]">
            {options.map((option, index) => (
              <a
                key={index}
                href={`#${index}`}
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-b-2 border-black"
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };
  
export default MenuButton2;