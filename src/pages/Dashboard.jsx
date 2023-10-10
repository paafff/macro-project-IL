import React, { useEffect } from 'react';
import Layout from './Layout';

import CardProfileDashboard from '../components/CardProfileDashboard';
import BiodataDashboard from '../components/BiodataDashboard';
import LaporanDashboard from '../components/LaporanDashboard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
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
      <BiodataDashboard />
    </Layout>
  );
};

export default Dashboard;
