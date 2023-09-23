import React from 'react';
import Layout from './Layout';

import Section1Home from '../components/Section1Home'
import Section2Home from '../components/Section2Home'
import AlurPengaduanHome from '../components/AlurPengaduanHome'
import Footer from '../components/Footer';

const Home = () => {

  return (
    <Layout>

      <Section1Home />

      <Section2Home />

      <AlurPengaduanHome />

      <Footer />

    </Layout>
  );
};

export default Home;
