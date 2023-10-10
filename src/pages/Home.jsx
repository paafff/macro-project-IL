import React from 'react';
import Layout from './Layout';

import Section1Home from '../components/Section1Home'
import AlurPengaduanHome from '../components/AlurPengaduanHome'
// import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const Home = () => {

  return (
    <Layout>

      <Section1Home />

      <AlurPengaduanHome />

      <FAQ />

    </Layout>
  );
};

export default Home;
