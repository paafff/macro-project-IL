import React from 'react'
import { Link } from 'react-router-dom';
import ImageHero from '../assets/image/hero-section1-homepage.jpg'

const Section1Home = () => {
    return (
        <div className='min-h-screen md:min-h-[600px] lg:min-h-screen flex flex-col md:flex-row justify-around items-center p-5 xl:p-32'>
            <div className='md:w-1/2 lg:w-1/2 md:p-5 lg:p-0 flex flex-col justify-center'>
                <div className="text lg:pl-20 lg:pb-10 mb-8">
                    <p className='text-3xl xl:text-[64px] leading-tight font-medium mb-4 xl:mb-8 text-gray-800'>Laporkan Kekerasan Seksual!</p>
                    <p className='text-lg xl:text-2xl font-regular text-gray-800'>Website pengaduan kasus kekerasan seksual adalah platform aman untuk melaporkan insiden-insiden kekerasan seksual dan mencari bantuan serta dukungan yang diperlukan</p>
                </div>
                <div className="button lg:pl-20 lg:mt-0">
                    <Link to="/report" className='px-4 py-2 xl:px-6 xl:py-4 rounded-md mr-3 font-semibold bg-red-700 text-base xl:text-xl text-white hover:bg-red-800 transition duration-200 ease-in-out shadow-md'>Lapor</Link >
                    {/* <Link className='px-8 py-4 xl:px-12 xl:py-6 rounded-full text-red-800 font-semibold ring-inset ring-4 ring-red-700 hover:ring-red-800 hover:text-gray-900 transition duration-200 ease-in-out shadow-md'>Help</Link> */}
                </div>
            </div>
            <div className='xs:hidden md:w-1/2 lg:w-1/2 flex justify-center'>
                <img src={ImageHero} className='rounded-lg w-72 lg:w-[300px] xl:w-[500px]' alt="" />
            </div>
        </div>
    )
}

export default Section1Home;