import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="bg-slate-200 min-h-screen">
        <Navbar />
        <div className="pt-0 lg:pt-0 xl:pt-0">{children}</div>
        {/* <div className="pt-20">{children}</div> */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
