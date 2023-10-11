import React from 'react'

import ImagePolisi from '../assets/image/sponsorship/polisi.png'
import ImageCNN from '../assets/image/sponsorship/cnn.png'
import ImageKominfo from '../assets/image/sponsorship/kominfo.png'
import ImageKompas from '../assets/image/sponsorship/kompas.png'

const Sponsorship = () => {
    return (
        <div className='flex flex-col py-32'>
            <p className='text-xl xl:text-4xl pb-2.5 inline-block w-fit m-auto font-medium leading-tight font-semibold border-b-4 border-red-700 border-dashed'>Mitra Kerja</p>
            <div className='px-2 py-20 flex justify-center items-center gap-8 md:gap-16 xl:gap-32'>
                <img src={ImagePolisi} className='w-14 lg:w-20 xl:w-28' alt="" srcset="" />
                <img src={ImageCNN} className='w-14 lg:w-20 xl:w-28' alt="" srcset="" />
                <img src={ImageKominfo} className='w-14 lg:w-20 xl:w-28' alt="" srcset="" />
                <img src={ImageKompas} className='w-14 lg:w-20 xl:w-28' alt="" srcset="" />
            </div>
        </div>
    )
}

export default Sponsorship