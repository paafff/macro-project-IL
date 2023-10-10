import React, { useEffect } from 'react';
import Layout from './Layout';
import DetailReportForm from '../components/DetailReportForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailReport = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.login);

  useEffect(() => {
    if (!user[0]) {
      // Perubahan disini, gunakan === untuk perbandingan
      alert('maaf login dulu yah');
      navigate('/auth');
    }
  }, [user]);

  return (
    <Layout>
      <div className="">
        <DetailReportForm />
      </div>
    </Layout>
  );
};

export default DetailReport;
