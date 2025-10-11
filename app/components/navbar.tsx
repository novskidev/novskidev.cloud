'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { menu } from '../utils/utility';
import { useTheme } from '../utils/theme-provider';
import Link from 'next/link';


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full h-[64px] bg-white dark:bg-black shadow-md z-50 px-4 sm:px-6 font-roboto">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full gap-3">
        {/* Logo */}
        <div className="flex gap-2 items-center flex-shrink-0">
          <Link href={'/'} aria-label="Home">
            <div className="text-base sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4] font-pally select-none">
              Novskidev
            </div>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 flex-grow justify-end items-center">
          {menu.map((item) => {
            const isHome = item.path === '/';
            const isActive = isHome
              ? pathname === '/'
              : pathname === item.path || pathname.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.id}
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`font-semibold text-base text-gray-900 dark:text-white hover:scale-110 dark:hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-verdigris ${isActive ? 'text-verdigris dark:text-verdigris' : ''}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:scale-125 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-verdigris">
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <button
            className="md:hidden p-2 rounded hover:scale-125 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-verdigris"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col w-full mt-2 rounded-md space-y-2 p-4 bg-white/95 dark:bg-gray-900/95 shadow-lg animate-fade-in">
          {menu.map((item) => {
            const isHome = item.path === '/';
            const isActive = isHome
              ? pathname === '/'
              : pathname === item.path || pathname.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.id}
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`block text-base text-gray-900 dark:text-white font-semibold px-2 py-2 rounded hover:bg-verdigris/10 dark:hover:bg-verdigris/20 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-verdigris ${isActive ? 'text-verdigris' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
