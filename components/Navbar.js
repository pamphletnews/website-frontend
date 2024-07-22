import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-800 text-white p-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-4">
        <MdMenu className="block md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu} />
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo */}
            <div className="border-l border-white pl-2">
              <span>मिंट हिंदी</span>
            </div>
          </a>
        </Link>
      </div>

      <div className={`md:flex items-center space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link href="/" legacyBehavior>
          <a className="text-lg">FIT</a>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <FaEnvelope className="text-2xl" />
        <FaUserCircle className="text-2xl" />
        <FaSearch className="text-2xl" />
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-purple-800 p-4 md:hidden">
          <Link href="/" legacyBehavior>
            <a className="block py-2">मिंट हिंदी</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="block py-2">FIT</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
