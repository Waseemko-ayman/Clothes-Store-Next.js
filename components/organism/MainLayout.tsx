import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyrights from './Copyrights';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Copyrights />
    </>
  );
};

export default MainLayout;
