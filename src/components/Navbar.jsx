import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/image/gelap.PNG';
import '../dist/css/navbar.css';
import { useSelector } from 'react-redux';
import notifDropdown from './notifDropdown';

import { MdOutlineNotificationsActive, MdOutlineSms } from 'react-icons/md';

const Navbar = () => {
  const [shadowNavbar, setShadowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.login);

  const changeShadowNavbar = () => {
    setShadowNavbar(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeShadowNavbar);
    return () => {
      window.removeEventListener('scroll', changeShadowNavbar);
    };
  }, [user]);

  return (
    <nav
      className={`bg-customGray w-full fixed duration-1000 z-10 ${
        shadowNavbar ? ' shadow-md shadow-red-900 pt-4 pb-2.5' : 'py-2'
      }`}
    >
      {/* 
     <nav
      className={`bg-slate-200 w-full  duration-300 z-10 ${
        shadowNavbar ? 'shadow-active ' : ''
      }`}
    >
       */}
      <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Kiri */}
          <div className="flex items-center">
            <div className="w-36 py-10">
              <Link to="/">
                <img src={logo} className="py-10" />
              </Link>
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
          {user[0] ? (
            <div className="hidden md:flex flex-grow items-center justify-end space-x-5">
              <Link
                to={`/report`}
                className="capitalize
              inline-block
              text-2xl
              relative
              cursor-pointer
              transition-all
              duration-500
              before:content-['']
              before:absolute
              before:-bottom-2
              before:left-0
              before:w-0
              before:h-1.5
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-r
              before:from-red-700
              before:via-red-700
              before:to-red-700
              hover:before:w-full
              hover:before:opacity-100"
              >
                Lapor !
              </Link>
              <Link
                to={`/about`}
                className="capitalize
                inline-block
                text-2xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-red-700
                before:via-red-700
                before:to-red-700
                hover:before:w-full
                hover:before:opacity-100"
              >
                Tentang
              </Link>
              <Link
                to={`/about`}
                className="capitalize
                inline-block
                text-2xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-red-700
                before:via-red-700
                before:to-red-700
                hover:before:w-full
                hover:before:opacity-100"
              >
                Pengaduan
              </Link>
              <Link
                to={`/dashboard`}
                className="capitalize
                inline-block
                text-2xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-red-700
                before:via-red-700
                before:to-red-700
                hover:before:w-full
                hover:before:opacity-100"
              >
                Profile
              </Link>

              {/* notiffffff */}
              <div class="group inline-block relative">
                <MdOutlineNotificationsActive className="scale-[2] cursor-pointer" />

                <ul class="absolute bg-none rounded-lg hidden text-gray-900 w-80 pt-2.5 group-hover:block">
                  {/* <div class=" "> */}
                  <Link class="flex px-4 py-3 bg-red-200 hover:bg-slate-200 rounded-t-lg  align-midle justify-between ">
                    <div class="flex self-center">
                      <MdOutlineSms className=" scale-[1.5]" />
                    </div>
                    <div class="w-full pl-3">
                      <div class="text-gray-900 text-sm mb-1.5 ">
                        Laporan berhasil dikirim, laporanmu akan ditinjau oleh
                        admin
                      </div>
                    </div>
                  </Link>
                  <Link class="flex px-4 py-3 bg-red-200 hover:bg-slate-200  align-midle justify-between ">
                    <div class="flex self-center">
                      <MdOutlineSms className="scale-[1.5]" />
                    </div>
                    <div class="w-full pl-3">
                      <div class="text-gray-900 text-sm mb-1.5 ">
                        Laporan berhasil dikirim, laporanmu akan ditinjau oleh
                        admin
                      </div>
                    </div>
                  </Link>
                  <Link class="flex px-4 py-3 bg-red-200 hover:bg-slate-200 rounded-b-lg  align-midle justify-between ">
                    <div class="flex self-center">
                      <MdOutlineSms className=" scale-[1.5]" />
                    </div>
                    <div class="w-full pl-3">
                      <div class="text-gray-900 text-sm mb-1.5 ">
                        Laporan berhasil dikirim, laporanmu akan ditinjau oleh
                        admin
                      </div>
                    </div>
                  </Link>
                  {/* </div> */}
                </ul>
              </div>
              {/* notiffffff */}
            </div>
          ) : (
            <div className="hidden md:flex flex-grow items-center justify-end space-x-5">
              <Link
                to={'/report'}
                className="capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-500
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-500
            before:bg-gradient-to-r
            before:from-red-700
            before:via-red-700
            before:to-red-700
            hover:before:w-full
            hover:before:opacity-100"
              >
                Lapor !
              </Link>
              <Link
                to={`/about`}
                // href="/about"
                className="capitalize
              inline-block
              text-2xl
              relative
              cursor-pointer
              transition-all
              duration-500
              before:content-['']
              before:absolute
              before:-bottom-2
              before:left-0
              before:w-0
              before:h-1.5
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-r
              before:from-red-700
              before:via-red-700
              before:to-red-700
              hover:before:w-full
              hover:before:opacity-100 "
              >
                Tentang
              </Link>

              <Link
                to={`/auth`}
                className="capitalize
              inline-block
              text-2xl
              relative
              cursor-pointer
              transition-all
              duration-500
              before:content-['']
              before:absolute
              before:-bottom-2
              before:left-0
              before:w-0
              before:h-1.5
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-r
              before:from-red-700
              before:via-red-700
              before:to-red-700
              hover:before:w-full
              hover:before:opacity-100"
              >
                Masuk
              </Link>
            </div>
          )}
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
              Masuk
            </Link>
            <Link
              to={'/report'}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Pengaduan
            </Link>
            <Link
              to={`/about`}
              className="text-lg text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out"
            >
              Tentang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
