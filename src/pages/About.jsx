import React from 'react';
import Layout from './Layout';

import CardAbout from '../components/CardAbout';
import Footer from '../components/Footer'
import Section1About from '../components/Section1About';
import Sponsorship from '../components/Sponsorship';

const About = () => {

  return (
    <Layout>
      <Section1About />
      <CardAbout />
      <Sponsorship />
      <Footer />
    </Layout>
  );
};

export default About;
