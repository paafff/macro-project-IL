import React from 'react'

import { useState } from 'react'

import { motion } from 'framer-motion'

const FAQ = () => {
    const [FAQ1, setFAQ1] = useState(false)
    const [FAQ2, setFAQ2] = useState(false)
    const [FAQ3, setFAQ3] = useState(false)
    const [FAQ4, setFAQ4] = useState(false)
    const [FAQ5, setFAQ5] = useState(false)

    return (
        <motion.div

            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}

            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}

            className='min-h-fit w-full flex justify-center pb-24 pt-16 items-center flex-col p-2'>

            <h1 className='text-2xl xl:text-3xl text-slate-800 font-bold mb-8 pb-2.5 inline-block border-b-4 border-dashed border-red-700 w-fit'>FAQ</h1>

            <div className='w-full h-fit md:w-3/4 xl:w-1/2 bg-gray-100 shadow-lg p-4 flex flex-col transition-all ease-in-out delay-150 mb-4 border border-red-700 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-3/4 flex items-center'>
                        <p className='text-base font-semibold hover:cursor-pointer'>Apa itu pengaduan kekerasan seksual?</p>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <p className='text-3xl hover:cursor-pointer text-red-700' onClick={() => setFAQ1(!FAQ1)}>{FAQ1 === true ? "-" : "+"}</p>
                    </div>
                </div>
                <div className={`w-full mt-5  ${FAQ1 === true ? " " : "hidden "}`}>
                    <p className=' '>Pengaduan kekerasan seksual adalah tindakan melaporkan atau mengungkapkan insiden atau kasus kekerasan seksual kepada pihak berwenang atau organisasi yang bertugas menangani masalah tersebut. Ini melibatkan proses untuk mencari keadilan dan dukungan bagi korban.</p>
                </div>
            </div>

            <div className='w-full h-fit md:w-3/4 xl:w-1/2 bg-gray-100 shadow-lg p-4 flex flex-col transition-all ease-in-out delay-150 mb-4 border border-red-700 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-3/4 flex items-center'>
                        <p className='text-base font-semibold hover:cursor-pointer '>Bagaimana saya bisa melaporkan kasus kekerasan seksual?</p>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <p className='text-3xl hover:cursor-pointer text-red-700' onClick={() => setFAQ2(!FAQ2)}>{FAQ2 === true ? "-" : "+"}</p>
                    </div>
                </div>
                <div className={`w-full mt-5  ${FAQ2 === true ? " " : "hidden "}`}>
                    <p className=' '>Anda dapat melaporkan kasus kekerasan seksual dengan menghubungi pihak berwenang setempat, seperti polisi, atau menghubungi organisasi non-pemerintah yang menangani masalah kekerasan seksual. Biasanya, Anda akan diminta memberikan laporan tertulis atau keterangan.</p>
                </div>
            </div>

            <div className='w-full h-fit md:w-3/4 xl:w-1/2 bg-gray-100 shadow-lg p-4 flex flex-col transition-all ease-in-out delay-150 mb-4 border border-red-700 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-3/4 flex items-center'>
                        <p className='text-base font-semibold hover:cursor-pointer '>Siapa yang dapat melaporkan kasus kekerasan seksual?</p>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <p className='text-3xl hover:cursor-pointer text-red-700' onClick={() => setFAQ3(!FAQ3)}>{FAQ3 === true ? "-" : "+"}</p>
                    </div>
                </div>
                <div className={`w-full mt-5  ${FAQ3 === true ? " " : "hidden "}`}>
                    <p className=' '>Siapa pun dapat melaporkan kasus kekerasan seksual, termasuk korban, saksi, atau individu lain yang mengetahui kasus tersebut. Laporan dari pihak ketiga juga dapat membantu dalam menyelidiki kasus.</p>
                </div>
            </div>

            <div className='w-full h-fit md:w-3/4 xl:w-1/2 bg-gray-100 shadow-lg p-4 flex flex-col transition-all ease-in-out delay-150 mb-4 border border-red-700 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-3/4 flex items-center'>
                        <p className='text-base font-semibold hover:cursor-pointer '>Apakah identitas saya akan dirahasiakan jika saya melaporkan?</p>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <p className='text-3xl hover:cursor-pointer text-red-700' onClick={() => setFAQ4(!FAQ4)}>{FAQ4 === true ? "-" : "+"}</p>
                    </div>
                </div>
                <div className={`w-full mt-5  ${FAQ4 === true ? " " : "hidden "}`}>
                    <p className=' '>Biasanya, identitas pelapor akan dirahasiakan selama proses penyelidikan dan hukum. Ini dilakukan untuk melindungi privasi dan keamanan pelapor.</p>
                </div>
            </div>

            <div className='w-full h-fit md:w-3/4 xl:w-1/2 bg-gray-100 shadow-lg p-4 flex flex-col transition-all ease-in-out delay-150 mb-4 border border-red-700 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-3/4 flex items-center'>
                        <p className='text-base font-semibold hover:cursor-pointer '>Bagaimana jika saya memerlukan dukungan emosional atau konseling?</p>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <p className='text-3xl hover:cursor-pointer text-red-700' onClick={() => setFAQ5(!FAQ5)}>{FAQ5 === true ? "-" : "+"}</p>
                    </div>
                </div>
                <div className={`w-full mt-5  ${FAQ5 === true ? " " : "hidden "}`}>
                    <p className=' '>Anda dapat mencari dukungan dari penyedia layanan kesehatan mental atau organisasi yang mengkhususkan diri dalam bantuan korban kekerasan seksual. Mereka akan membantu Anda dalam proses penyembuhan.</p>
                </div>
            </div>

        </motion.div>
    )
}

export default FAQ