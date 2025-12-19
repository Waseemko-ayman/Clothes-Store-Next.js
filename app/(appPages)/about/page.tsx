import AboutPage from '@/components/pages/about';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About - Clothes Shopping',
  description: 'Learn more about Clothes Shopping',
};

const About = () => <AboutPage />;

export default About;
