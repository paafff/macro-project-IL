import React, { useEffect } from 'react';
import Layout from './Layout';
import ReportForm from '../components/ReportForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.login);

  useEffect(() => {
    if (!user[0]) {
      // Perubahan disini, gunakan === untuk perbandingan
      alert('Akses tidak sah, harap login terlebih dahulu');
      navigate('/auth');
    }
  }, [user, navigate]);
  return (
    <Layout>
      <div className="">
        <ReportForm />
      </div>
    </Layout>
  );
};

export default Report;
