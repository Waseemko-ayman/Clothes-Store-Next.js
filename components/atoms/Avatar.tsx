import Image from 'next/image';
import React from 'react';

interface ImageProps {
  imgSrc: string;
  imgAlt: string;
  imgTitle: string;
}

const Avatar = ({ imgSrc, imgAlt, imgTitle }: ImageProps) => {
  return (
    <Image
      src={imgSrc}
      className="rounded-[50%]"
      alt={imgAlt}
      title={imgTitle}
      width={70}
      height={70}
    />
  );
};

export default Avatar;
