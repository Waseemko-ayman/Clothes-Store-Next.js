import ContactPage from '@/components/pages/contact';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact - Clothes Shipping',
  description: 'Get in touch with Clothes Shopping',
};

const Contact = () => <ContactPage />;

export default Contact;
