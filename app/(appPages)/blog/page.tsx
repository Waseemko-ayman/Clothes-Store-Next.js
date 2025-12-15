import BlogPage from '@/components/pages/blog';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog - Clothes Shopping',
  description: 'Read the latest articles on Clothes Shopping',
};

const Blog = () => <BlogPage />;

export default Blog;
