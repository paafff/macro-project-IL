import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();

  return (
    // <div className="flex justify-center items-center py-5">
    <div className="w-80 p-4 bg-none border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 ">
      <h5 className=" text-xl font-medium text-gray-900 text-center ">Daftar</h5>
      <hr className='py-1'/>
      <form className="space-y-2" onSubmit={'registerUser'}>
        <div>
          <label className="mb-1 text-sm font-medium text-gray-900 ">
            Nama
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2 "
            placeholder="Nama"
            required
          />
        </div>
        <div>
          <label className="mb-1 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2 "
            placeholder="name@email.com"
            required
          />
        </div>

        <div>
          <label className="mb-1 text-sm font-medium text-gray-900 ">
            Kata Sandi
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2 "
            placeholder="********"
            required
          />
        </div>

        <div>
          <label className="mb-1 text-sm font-medium text-gray-900 ">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            onChange={(e) => setConfPassword(e.target.value)}
            className=" bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2 "
            placeholder="********"
            required
          />
        </div>
        {/* <br /> */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            className="mr-2 focus:ring-0 rounded"
            required
          />
          <label className="mb-1 text-xs font-medium text-gray-900 ">
           Saya menyetujui{' '}
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              Persyaratan
            </a>{' '}
            dan{' '}
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              Ketentuan
            </a>
          </label>
        </div>

        <hr className='py-1'/>
        <button
          type="submit"
          className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Register
        </button>
      </form>
    </div>
    // </div>
  );
};

export default RegisterForm;
