import React from 'react';
// import ImageProfile from '../assets/image/profile-male.png';

import ImageRafael from '../assets/image/profile_picture/Rafael_Kesma.png';
import ImageIlham from '../assets/image/profile_picture/ilham(2).png';
import ImageTania from '../assets/image/profile_picture/tania.jpg';
import ImageGilang from '../assets/image/profile_picture/gilang.jpg';
import ImageAdit from '../assets/image/profile_picture/adit.jpg';
import ImageDanang from '../assets/image/profile_picture/danangr.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function CardAbout() {
  function link(url) {
    window.open(url, '_blank');
  }

  return (
    <>
      <div className="w-full flex flex-col ">
        <p className="text-xl xl:text-4xl inline-block w-fit m-auto font-medium leading-tight font-semibold border-b-4 pb-2.5 border-red-700 border-dashed">
          Tim Pengembang
        </p>
        <div className="min-h-screen 2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3 gap-2 p-2 pt-20 mb-24">
          <div className="md:aspect-[12/16] items-center shadow-xl flex flex-col justify-between  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className="bg-gray-200 object-cover rounded-full w-[240px] h-[240px] "
                src={ImageRafael}
                alt="profile of rafael"
              />
            </div>
            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Rafael Hotasiho Imanuel Napitupulu
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  Project Manager
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() => link('https://www.instagram.com/raf_rap')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />
                <FontAwesomeIcon
                  onClick={() => link('https://github.com/rafrap03')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />
                <FontAwesomeIcon
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  style={{ color: '#2071fe' }}
                  icon={faFacebook}
                />
              </div>
            </div>
          </div>
          <div className="md:aspect-[12/16] items-center shadow-xl shadow-xl flex flex-col justify-between  xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className="bg-gray-200 object-top object-cover rounded-full w-[240px] h-[240px]"
                src={ImageIlham}
                alt="profile of ilham"
              />
            </div>

            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Ilham Soejud Alkahfiardy
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  UI UX Designer / Coder
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() => link('http://instagram.com/ilhamsoejud')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />

                <FontAwesomeIcon
                  onClick={() =>
                    link('https://github.com/IlhamSoejudAlkahfiardy')
                  }
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />

                <FontAwesomeIcon
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faFacebook}
                  style={{ color: '#2071fe' }}
                />
              </div>
            </div>
          </div>
          <div className="md:aspect-[12/16] items-center shadow-xl shadow-xl flex flex-col justify-between xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className=" object-cover rounded-full w-[240px] h-[240px]"
                src={ImageDanang}
                alt=""
              />
            </div>
            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Danang Rifai
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  Hacker / Coder
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() => link('https://www.instagram.com/paafff')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />

                <FontAwesomeIcon
                  onClick={() => link('https://github.com/paafff')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />

                <FontAwesomeIcon
                  onClick={() => link('https://web.facebook.com/dpaafff/')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faFacebook}
                  style={{ color: '#2071fe' }}
                />
              </div>
            </div>
          </div>
          <div className="md:aspect-[12/16] items-center shadow-xl shadow-xl flex flex-col justify-between xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className=" object-cover rounded-full w-[240px] h-[240px]"
                src={ImageAdit}
                alt=""
              />
            </div>
            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Aditya Nur Firmansyah
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  UI UX Designer
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() =>
                    link(
                      'https://instagram.com/adtyanur?igshid=OGQ5ZDc2ODk2ZA=='
                    )
                  }
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />

                <FontAwesomeIcon
                  onClick={() => link('https://github.com/adtyanur')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />

                <FontAwesomeIcon
                  onClick={() =>
                    link(
                      'https://www.facebook.com/IAditTHEkInGEPfp?mibextid=ZbWKwL'
                    )
                  }
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faFacebook}
                  style={{ color: '#2071fe' }}
                />
              </div>
            </div>
          </div>
          <div className="md:aspect-[12/16] items-center shadow-xl shadow-xl flex flex-col justify-between xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className=" object-cover rounded-full w-[240px] h-[240px]"
                src={ImageTania}
                alt=""
              />
            </div>
            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Tania Frentinur
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  UI UX Designer
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() => link('http://instagram.com/taniaftrr_')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />

                <FontAwesomeIcon
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />

                <FontAwesomeIcon
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faFacebook}
                  style={{ color: '#2071fe' }}
                />
              </div>
            </div>
          </div>
          <div className="md:aspect-[12/16] items-center shadow-xl shadow-xl flex flex-col justify-between xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="pt-10 bg-slate-50 w-[240px] h-[240px] rounded-lg flex justify-center items-center">
              <img
                className=" object-cover rounded-full w-[240px] h-[240px]"
                src={ImageGilang}
                alt=""
              />
            </div>
            <div>
              <div className="text-center px-2">
                <p className="font-semibold text-base text-blue-950 tracking-wide">
                  Muhammad Gilang al Wafi
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm text-center font-regular text-slate-700">
                  UI UX Designer
                </p>
              </div>
              <div className="my-4 flex justify-center gap-4 pb-4">
                <FontAwesomeIcon
                  onClick={() => link('https://www.instagram.com/alwafi1503/')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faInstagram}
                  style={{ color: '#e123de' }}
                />

                <FontAwesomeIcon
                  onClick={() => link('https://github.com/alwafi1503')}
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faGithub}
                />

                <FontAwesomeIcon
                  onClick={() =>
                    link('https://web.facebook.com/gilang.alwafi.9')
                  }
                  className="hover:scale-150 transition ease-in-out hover:cursor-pointer"
                  size="lg"
                  icon={faFacebook}
                  style={{ color: '#2071fe' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAbout;
