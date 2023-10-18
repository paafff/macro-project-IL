import React from 'react'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom';
import ImageHero from '../assets/image/hero-section1-homepage.jpg'

const Section1Home = () => {
    return (
        <motion.div

            // initial={{ opacity: 1 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}

            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}

            className='min-h-screen md:min-h-[600px] lg:min-h-screen pt-20 md:pt-0 lg:pt-0 xl:pt-0 flex flex-col md:flex-row justify-around items-center p-5 xl:p-32'>
            <div className='md:w-1/2 lg:w-1/2 md:p-5 lg:p-0 flex flex-col justify-center'>
                <div className="text lg:pl-20 lg:pb-10 mb-8">
                    <p className='text-3xl xl:text-[64px] leading-tight font-medium mb-4 xl:mb-8 text-gray-800'>Laporkan Kekerasan Seksual!</p>
                    <p className='text-lg xl:text-2xl font-regular text-gray-800'>Sebuah website yang berkerja sama dengan instansi pemerintah dalam soal pengaduan pelecehan seksual yang dilengkapi dengan fitur unggah bukti dan rincian kejadian.</p>
                </div>
                <div className="button lg:pl-20 lg:mt-0">
                    <Link to="/report" className='px-8 py-2 xl:px-6 xl:py-4 rounded-md mr-3 font-semibold bg-red-700 text-base xl:text-xl text-white hover:bg-red-800 transition duration-200 ease-in-out drop-shadow-md'>Lapor !</Link >
                </div>
            </div>
            <div className='xs:hidden md:w-1/2 lg:w-1/2 flex justify-center'>
                <img src={ImageHero} className='rounded-lg w-72 lg:w-[300px] xl:w-[500px]' alt="" />
            </div>
        </motion.div>
    )
}

export default Section1Home;