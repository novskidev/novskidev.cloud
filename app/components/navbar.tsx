'use client';

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { menu } from '../utils/utility';
import profilpic from "../../public/images/5-29-removebg-preview.png"
import Image from 'next/image';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <nav className={`fixed top-0 w-full h-[64px] bg-white dark:bg-gray-900 shadow-md z-50 p-4 font-roboto`}>
      <div className=" mx-auto flex justify-between items-center gap-3">
        {/* Logo */}
        <div className='flex gap-2 items-center'>
        <Image src={profilpic} alt="Profile Picture" className="bg-gradient-to-r from-[#99D98C] to-[#34A0A4] w-10 h-10 rounded-full object-cover" />
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4] font-pally">
          Novskidev
        </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 flex-grow justify-end">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.title.toLowerCase()}`}
              className="font-semibold text-base text-gray-900 dark:text-white hover:scale-110 dark:hover:scale-110 transition duration-300 ease-in-out"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Dark Mode Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full">
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex w-full flex-col mt-4 rounded-md space-y-4 p-4 bg-white dark:bg-gray-900">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.title.toLowerCase()}`}
              className="text-gray-900 dark:text-white hover:underline dark:hover:underline transition duration-300 ease-in-out"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
