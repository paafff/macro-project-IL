import React from 'react';
import Layout from './Layout';
import ReportForm from '../components/ReportForm';

const Report = () => {
  return (
    <Layout>
      <div className='pt-20'>

      <ReportForm />
      <div className="min-h-screen pt-0 flex justify-center items-center">
        Ini buat test navbar
      </div>
      </div>
    </Layout>
  );
};

export default Report;
