import React from 'react'
import ImageProfile from '../assets/img/profile-male.png';

import ImageRafael from '../assets/img/profile_picture/Rafael_Kesma.png'
import ImageIlham from '../assets/img/profile_picture/ilham(2).png'
import ImageTania from '../assets/img/profile_picture/tania.png'
import ImageGilang from '../assets/img/profile_picture/gilang.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';

function CardAbout() {

    function link(url) {
        window.open(url, '_blank')
    }

    return (
        <>
            <div className=''>
                <div className="developer text-center">
                    <p className='text-xl xl:text-4xl font-medium leading-tight font-regular underline underline-offset-4'>Para Tim Pengembang Kami</p>
                </div>
                <div className="min-h-screen 2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3 gap-2 p-2 pt-20 mb-24">

                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className='w-32' src={ImageRafael} alt="image profile of rafael" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Rafael Hotasiho Imanuel Napitupulu
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hustler / Project Manager</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon onClick={() => link('https://www.instagram.com/raf_rap')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />
                        </div>
                    </div>
                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className="w-24" src={ImageIlham} alt="image profile of ilham" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Ilham Soejud Alkahfiardy
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hacker / Coder</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon onClick={() => link('http://instagram.com/ilhamsoejud')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />

                            <FontAwesomeIcon onClick={() => link('https://github.com/IlhamSoejudAlkahfiardy')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faGithub} />

                            <FontAwesomeIcon onClick={() => link('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faLinkedin} style={{ color: "#2071fe", }} />

                            <FontAwesomeIcon onClick={() => link('https://gitlab.com/alkahfiardyIlhamSoejud')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faGitlab} style={{ color: "#2071fe", }} />
                        </div>
                    </div>
                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className=" w-32" src={ImageProfile} alt="" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Danang Rifai
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hacker / Coder</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faGithub} />
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faFacebook} style={{ color: "#2071fe", }} />
                        </div>
                    </div>
                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className=" w-32" src={ImageProfile} alt="" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Aditya Nur Firmansyah
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hipster / Designer</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faGithub} />
                            <FontAwesomeIcon className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faFacebook} style={{ color: "#2071fe", }} />
                        </div>
                    </div>
                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className="xl:w-44 w-32 " src={ImageTania} alt="" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Tania Frentinur
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hipster / Designer</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon onClick={() => link('https://www.instagram.com/taniaftrr_')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />
                        </div>
                    </div>
                    <div
                        className="md:aspect-[12/16]  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
                        <div className="bg-slate-50 h-3/4 rounded-lg flex justify-center items-center">
                            <img className=" w-32" src={ImageGilang} alt="" />
                        </div>
                        <div className="text-center px-2">
                            <p className="font-semibold text-base text-blue-950 tracking-wide">
                                Muhammad Gilang al Wafi
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm text-center font-regular text-slate-700">Hipster / Designer</p>
                        </div>
                        <div className="my-4 flex justify-center gap-4 pb-4">
                            <FontAwesomeIcon onClick={() => link('https://www.instagram.com/alwafi1503/')} className='hover:scale-150 transition ease-in-out hover:cursor-pointer' size="lg" icon={faInstagram} style={{ color: "#e123de", }} />

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CardAbout