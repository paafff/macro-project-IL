import React from 'react';
import Layout from './Layout';

import CardAbout from '../components/CardAbout';
import Section1About from '../components/Section1About';
import Sponsorship from '../components/Sponsorship';

const About = () => {

  return (
    <Layout>
      <Section1About />
      <CardAbout />
      <Sponsorship />
    </Layout>
  );
};

export default About;
