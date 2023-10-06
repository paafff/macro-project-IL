import React from 'react';
import Layout from './Layout';
import ReportForm from '../components/ReportForm';

const Report = () => {
  return (
    <Layout>
      <div className='pt-20'>

        <ReportForm />
      </div>
    </Layout>
  );
};

export default Report;
