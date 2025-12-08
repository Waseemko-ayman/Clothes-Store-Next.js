import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyrights from './Copyrights';
import NewsletterSignup from '../molecules/NewsletterSignup';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <NewsletterSignup />
      <Footer />
      <Copyrights />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
