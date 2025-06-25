/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  imgSrc: string;
  imgTitle: string;
  title: string;
  description: string;
  otherClassNameBox?: string;
  beforeContent?: string;
}

const BlogCard = ({
  imgSrc,
  imgTitle,
  title,
  description,
  otherClassNameBox,
  beforeContent,
}: BlogCardProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full gap-10 ${otherClassNameBox}`}
    >
      <div
        className={`relative before:content-var before:absolute before:text-[80px] before:font-bold before:text-[#b1b1b1] before:left-0 before:-top-[60px] before:-z-10`}
        style={{ ['--before-content' as string]: `"${beforeContent}"` }}
      >
        <img
          src={`/assets/blog/${imgSrc}`}
          alt={imgTitle}
          title={imgTitle}
          className="max-w-full w-[500px] z-10"
        />
      </div>
      <div className="max-[992px]:text-center">
        <h3 className="text-[var(--fifth-color)] text-3xl md:text-xl font-bold">
          {title}
        </h3>
        <p className="text-[#777] max-w-full w-[600px] max-md:w-[350px] max-md:text-[18px] mt-[15px] mb-5">
          {description}
        </p>
        <Link
          href="#"
          className="block text-[var(--fifth-color)] relative text-sm font-bold uppercase w-[190px] max-md:text-base max-[992px]:m-auto transition duration-300 hover:text-[var(--forth-color)] after:absolute after:w-[50px] after:h-0.5 after:-right-2.5 after:top-[50%] after:-translate-y-[50%] after:bg-[var(--fifth-color)] after:transition after:duration-300 hover:after:bg-[var(--forth-color)] after:max-[992px]:-right-[30px] after:max-md:-right-10"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
