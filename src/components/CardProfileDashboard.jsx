import React from 'react'

import ImageProfile from '../assets/image/profile-male.png'

const CardProfileDashboard = () => {
    return (
        <>
            <div className='w-72 mx-auto lg:w-1/4 py-4 bg-slate-600 rounded-lg shadow-md flex flex-col justify-center'>
                <img className='mx-auto' alt='' width={100} src={ImageProfile} srcSet="" />
                <div className='bio p-5 flex flex-col'>
                    <div className='mb-5 text-center'>
                        <p className='text-slate-200'>Lorem ipsum dolor sit, </p>
                        <p className='text-slate-200'>Lorem ipsum dolor sit, </p>
                        <p className='text-slate-200'>Lorem ipsum dolor sit, </p>
                    </div>
                    <a href='#' className='bg-slate-200 px-4 text-center mx-auto py-2 rounded-md font-medium text-slate-700 hover:bg-slate-300'>
                        Update Profile
                    </a>
                </div>
            </div>
        </>
    )
}

export default CardProfileDashboard