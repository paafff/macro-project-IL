import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser, reset, getMe } from '../redux/authSlice';
import { addLogin } from '../redux/loginSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [uuid, setUuid] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== 'pstar7@mail.com' || password !== '12345') {
      alert('maaf gagal');
    } else {
      const newLogin = {
        username: 'patrickStar',
        email: email,
        password: password,
      };

      dispatch(addLogin(newLogin));
      navigate('/');
    }
  };

  return (
    <>
      <div className="w-80 p-4 bg-none border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 ">
        {/* {message && <p>{message}</p>} */}
        <h5 className=" text-xl font-medium text-gray-900 text-center ">
          Masuk
        </h5>
        <hr className="py-1" />
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <label className=" mb-1 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500  w-full p-2  "
              placeholder="name@email.com"
              required
            />
          </div>

          <div>
            <label className=" mb-1 text-sm font-medium text-gray-900 ">
              Kata Sandi
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500  w-full p-2  "
              placeholder="********"
              required
            />
          </div>
          <hr className="py-1" />

          <div className="flex  items-center">
            <label className="mb-1 text-sm font-regular text-gray-900 ">
              Lupa kata sandi?
              <a
                href="#"
                className="text-blue-600 font-regular hover:text-blue-700 hover:underline"
              >
                {' '}
                klik disini
              </a>
            </label>
          </div>

          <div className=" ">
            <button
              type="submit"
              className=" w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
