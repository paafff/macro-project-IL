import React from 'react';
import Layout from './Layout';
import TestingComponent from '../components/TestingComponent';

const user = {
  name: 'Ilham Soejud',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const value = 1;

const Authentication = () => {

  let content;

  if (value == 1) {
    content = <TestingComponent />
  } else {
    content = "no testing component coz the value is 0";
  }

  return (
    <Layout>
      <div className='min-h-screen pt-16 flex justify-center items-center'>
        {user.name}
        <img src={user.imageUrl} alt="" width={user.imageSize} />
      </div>

      {value == 1 ? <TestingComponent /> : "No testing component"}

      <div className='min-h-screen pt-16 flex justify-center items-center'>Ini buat test navbar</div>
    </Layout>
  );
};

export default Authentication;
