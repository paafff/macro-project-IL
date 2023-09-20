import React from 'react';
import Layout from './Layout';
import ImageProfile from '../assets/img/profile-male.png';

const developers = [
  {
    id: 1,
    profile: ImageProfile,
    name: 'Rafael Napitupulu',
    username: 'Rap',
    role: 'Product Manager',
  },
  {
    id: 2,
    profile: ImageProfile,
    name: 'Ilham Soejud',
    username: 'Ham',
    role: 'Hacker / Coder',
  },
  {
    id: 3,
    profile: ImageProfile,
    name: 'Danang Rifai',
    username: 'Nang',
    role: 'Hacker / Coder',
  },
  {
    id: 4,
    profile: ImageProfile,
    name: 'Tania Frentinur',
    username: 'Tan',
    role: 'Hipster / Designer',
  },
  {
    id: 5,
    profile: ImageProfile,
    name: 'Muhammad Gilang al Wafi',
    username: 'Lang',
    role: 'Hipster / Designer',
  },
  {
    id: 6,
    profile: ImageProfile,
    name: 'Aditya Nur Firmansyah',
    username: 'Dit',
    role: 'Hipster / Designer',
  },
];

const About = () => {
  const developer = developers.map((name) => (
    <div
      className="aspect-[14/16] lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-700 rounded-lg drop-shadow-2xl flex flex-col justify-center items-center"
      key={name.id}
    >
      <div className="my-2">
        <img className="w-20" src={name.profile} alt="" />
      </div>
      <div className="my-2 text-center">
        <p className="font-semibold text-slate-100 tracking-wide">
          {name.name}
        </p>
      </div>
      <div className="my-3 rounded-md bg-slate-200 py-2 px-3 shadow-md ">
        <p className="text-sm font-medium text-slate-700">{name.role}</p>
      </div>
    </div>
  ));

  return (
    <Layout>
      <div className="min-h-screen  2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {developer}
      </div>
      <div className="min-h-screen pt-16 flex justify-center items-center">
        Ini buat test navbar
      </div>
    </Layout>
  );
};

export default About;
