import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../dist/css/navbar.css';

const Navbar = () => {
  const [shadowNavbar, setShadowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeShadowNavbar = () => {
    setShadowNavbar(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeShadowNavbar);
    return () => {
      window.removeEventListener('scroll', changeShadowNavbar);
    };
  }, []);

  return (
    <nav
      className={`bg-slate-200 fixed w-full duration-300 z-10 ${
        shadowNavbar ? 'shadow-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Kiri */}
          <div className="flex items-center">
            <div className="w-20 rounded-full">
              <Link to="/">Logo</Link>
            </div>
          </div>

          {/* Tampilan menu untuk perangkat mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={
                    menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Kanan (untuk perangkat desktop) */}
          <div className="hidden md:flex flex-grow items-center justify-end space-x-5">
            <Link
              to={`/auth`}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Authentication
            </Link>
            <Link
              to={'/report'}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Report
            </Link>
            <Link
              to={`/about`}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Menu dropdown untuk perangkat mobile */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link
              to={`/auth`}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Authentication
            </Link>
            <Link
              to={'/report'}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Report
            </Link>
            <Link
              to={`/about`}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
