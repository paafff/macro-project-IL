import React from 'react'

import ImagePolisi from '../assets/img/sponsorship/cnn.png'

const Sponsorship = () => {
    return (
        <div className=''>
            <p className='text-xl xl:text-4xl font-medium leading-tight font-regular underline underline-offset-4 text-center'>Sponsorship</p>
            <div className='px-2 py-4 flex justify-center items-center gap-4'>
                <img src={ImagePolisi} width={50} alt="" srcset="" />
                <img src={ImagePolisi} width={50} alt="" srcset="" />
                <img src={ImagePolisi} width={50} alt="" srcset="" />
                <img src={ImagePolisi} width={50} alt="" srcset="" />
                <img src={ImagePolisi} width={50} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Sponsorship