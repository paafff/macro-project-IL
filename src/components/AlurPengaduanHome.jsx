import React from 'react'

import ImageAlur from '../assets/img/alur.png'

function AlurPengaduanHome() {

    return (
        <div className='min-h-fit flex py-20 flex-col p-5 lg:px-20 xl:px-32'>
            <h1 className='text-2xl xl:text-3xl mb-16 xl: text-slate-800 font-bold inline-block xl:mx-auto border-b-4 pb-2.5 border-dashed border-red-700 w-fit border-separate border-spacing-4'>Alur Pengaduan</h1>

            <div className="penjelasan w-full">
                <img src={ImageAlur} className='lg:w-3/4 xl:w-1/2 mx-auto' alt="" />
            </div>
        </div>
    )
}

export default AlurPengaduanHome