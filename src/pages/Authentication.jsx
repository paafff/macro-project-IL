import React, { useState } from 'react';
import Layout from './Layout';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import authImg from '../assets/image/authImg.png';

const Authentication = () => {
  const [isVisible, setVisible] = useState(false);

  let onHideShowClick = () => {
    setVisible(!isVisible);
  };

  return (
    <Layout>
      <>
        <div className=" flex justify-center items-center min-h-screen  ">
          <div className="bg-none place-items-center flex flex-col md:flex-row justify-evenly w-full max-w-6xl p-4 bg-none  rounded-lg  sm:p-6 md:p-8 pt-20">
            <div className="relative">
              <img
                className="max-w-md md:max-w-sm md:self-start "
                src={authImg}
                alt="logokita"
              />
              <div className="text-center absolute top-[425px] left-0 w-full">
                {isVisible ? 'Sudah Memiliki Akun? ' : 'Belum Memiliki Akun? '}
                <button className="text-blue-500" onClick={onHideShowClick}>
                  {isVisible ? `Masuk` : 'Daftar'}
                </button>
              </div>
            </div>
            <div className="  flex flex-col justify-center items-center">
              <div className=""></div>
              <div className="">
                {isVisible ? <RegisterForm /> : <LoginForm />}
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Authentication;
