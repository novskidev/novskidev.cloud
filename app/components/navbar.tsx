'use client';

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { menu } from '../utils/menu';

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
    <nav className={`fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 p-4 font-roboto`}> 
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-5">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4] font-pally">Novski</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 flex-grow justify-end">
          {menu.map((item) => (
            <a key={item.id} href={`#${item.title.toLowerCase()}`} className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              {item.title}
            </a>
          ))}
        </div>

        {/* Dark Mode Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600 dark:text-gray-300" />}
          </button>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 p-4 bg-white dark:bg-gray-900 shadow-lg">
          {menu.map((item) => (
            <a key={item.id} href={`#${item.title.toLowerCase()}`} className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}