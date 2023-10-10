import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="bg-[#F7F7F7] min-h-screen">
        <Navbar />
        <div className="font-fontMontserrat">{children}</div>
        <Footer />
      </div>

    </React.Fragment>
  );
};

export default Layout;
