import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='font-fontMontserrat w-full h-32 border-solid shadow-md bg-[#F7F7F7] flex flex-col lg:flex-row justify-around items-center py-4'>
            <div className='flex mb-2'>
                <p className='text-slate-800 font-medium text-base lg:text-lg'>&copy;2023 Berani Bicara</p>
            </div>
            <div className='flex mt-2'>
                <FontAwesomeIcon className='mx-4 hover:cursor-pointer hover:scale-150 transition' icon={faFacebook} size='lg' style={{ color: "#1e3051", }} />
                <FontAwesomeIcon className='mx-4 hover:cursor-pointer hover:scale-150 transition' icon={faTwitter} size='lg' style={{ color: "#1e3051", }} />
                <FontAwesomeIcon className='mx-4 hover:cursor-pointer hover:scale-150 transition' icon={faGithub} size='lg' style={{ color: "#1e3051", }} />
                <FontAwesomeIcon className='mx-4 hover:cursor-pointer hover:scale-150 transition' icon={faInstagram} size='lg' style={{ color: "#1e3051", }} />
                <FontAwesomeIcon className='mx-4 hover:cursor-pointer hover:scale-150 transition' icon={faDribbble} size='lg' style={{ color: "#1e3051", }} />
            </div>
        </div>
    )
}

export default Footer