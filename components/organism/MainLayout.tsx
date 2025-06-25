import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyrights from './Copyrights';
import NewsletterSignup from '../molecules/NewsletterSignup';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <NewsletterSignup />
      <Footer />
      <Copyrights />
    </>
  );
};

export default MainLayout;
