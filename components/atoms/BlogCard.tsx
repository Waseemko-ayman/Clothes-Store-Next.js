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
      className={`flex items-center justify-center flex-wrap w-full gap-10 ${otherClassNameBox}`}
    >
      <div
        className="relative before:absolute before:text-[80px] before:font-bold before:text-[#b1b1b1] before:left-0 before:-top-[70px] before:-z-10 before:content-[attr(data-before)]"
        data-before={beforeContent}
      >
        <img
          src={`/assets/blog/${imgSrc}`}
          alt={imgTitle}
          title={imgTitle}
          className="max-w-full w-[500px] z-10"
        />
      </div>
      <div className="max-xl:text-center">
        <h3 className="text-(--fifth-color) text-xl md:text-3xl font-bold">
          {title}
        </h3>
        <p className="text-[#777] max-w-full w-[600px] max-md:w-[300px] max-md:text-[18px] mt-[15px] mb-5">
          {description}
        </p>
        <Link
          href="#"
          className="relative block w-[190px] text-sm max-md:text-base font-bold uppercase text-(--fifth-color) transition duration-300 hover:text-(--forth-color)
    after:absolute after:h-0.5 after:bg-(--fifth-color) hover:after:bg-(--forth-color) after:transition after:duration-300
    after:w-[50px] after:left-1/2 after:-translate-x-1/2 after:-bottom-2.5
    xl:after:top-1/2 xl:after:left-auto xl:after:-right-8 xl:after:-translate-y-1/2 xl:after:bottom-auto
    max-xl:mx-auto"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
