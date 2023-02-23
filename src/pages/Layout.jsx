import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
