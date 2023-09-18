import React from 'react';
import { Link } from 'react-router-dom';
// import ppSaya from '../assets/ppSaya.png';
import { HiOutlineBeaker } from 'react-icons/hi';

// import {
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsPersonCircle,
//   BsTelegram,
//   BsWhatsapp,
// } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-none">
      <div className="max-w-4xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* kiri */}
          <div className="flex">
            <div className="flex items-center w-10 rounded-full">
              <Link to="/">
                anggap saja logo
                {/* <img src={ppSaya} alt="Avatar" className="rounded-full" /> */}
              </Link>
            </div>
          </div>

          {/* kanan */}

          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-4">
              <Link
                to={`/auth`}
                className="text-2xl text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <div className="flex items-center">
                  {/* <BsPersonCircle className="mr-2" /> */}
                  <span className="align-middle">Authentication</span>
                </div>
              </Link>
              <Link
                to={'/report'}
                className="text-2xl text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <div className="flex items-center">
                  {/* <HiOutlineBeaker className="mr-2" /> */}
                  <span className="align-middle">Report</span>
                </div>
              </Link>
              <Link
                to={`/about`}
                className="text-2xl text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <div className="flex items-center">
                  {/* <BsPersonCircle className="mr-2" /> */}
                  <span className="align-middle">About</span>
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
