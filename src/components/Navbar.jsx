import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../dist/css/navbar.css'
// import ppSaya from '../assets/ppSaya.png';
// import { HiOutlineBeaker } from 'react-icons/hi';

// import {
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsPersonCircle,
//   BsTelegram,
//   BsWhatsapp,
// } from 'react-icons/bs';

const Navbar = () => {

  const [shadowNavbar, setShadowNavbar] = useState(false);

  const changeShadowNavbar = () => {
    if (window.scrollY > 10) {
      setShadowNavbar(true);
    } else {
      setShadowNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeShadowNavbar);
  })

  return (
    <nav className={`bg-slate-200 fixed w-full duration-300 z-10 ${shadowNavbar ? "shadow-active" : " "}`}>
      <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* kiri */}
          <div className="flex">
            <div className="flex items-center w-20 rounded-full">
              <Link to="/">
                anggap saja logo
                {/* <img src={ppSaya} alt="Avatar" className="rounded-full" /> */}
              </Link>
            </div>
          </div>

          {/* kanan */}

          {/* <div className="hidden md:block"> */}
          <div className="">
            <div className="ml-5 flex items-baseline">
              <Link
                to={`/auth`}
                className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out mx-5"
              >
                <div className="flex items-center">
                  {/* <BsPersonCircle className="mr-2" /> */}
                  <span className="align-middle font-normal">Authentication</span>
                </div>
              </Link>
              <Link
                to={'/report'}
                className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out mx-5"
              >
                <div className="flex items-center">
                  {/* <HiOutlineBeaker className="mr-2" /> */}
                  <span className="align-middle  font-normal">Report</span>
                </div>
              </Link>
              <Link
                to={`/about`}
                className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out mx-5"
              >
                <div className="flex items-center">
                  {/* <BsPersonCircle className="mr-2" /> */}
                  <span className="align-middle  font-normal">About</span>
                </div>
              </Link>
            </div>
          </div>
          {/* kanan */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
