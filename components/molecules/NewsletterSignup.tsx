import React from 'react';
import Container from '../atoms/Container';
import Layer from '../atoms/Layer';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const NewsletterSignup = () => {
  return (
    <Layer
      otherClassName="bg-center bg-cover bg-no-repeat min-h-[25vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/20 flex"
      style={{ backgroundImage: 'url(/assets/banner/signUp.jpg)' }}
    >
      <Container otherClassName="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-2.5">
        <div className="text-center lg:text-start">
          <h2 className="text-white text-3xl font-bold">
            Sign Up For Newsletters
          </h2>
          <p className="text-[#d3d5da] text-base">
            Get E-mail updates about our latest shop and{' '}
            <span className="text-[#ffa500]">special offers</span>
          </p>
        </div>
        <form className="max-w-full flex items-center flex-col sm:flex-row gap-2.5 sm:gap-0 justify-center">
          <Input
            type="email"
            inputName="email"
            placeholder="Your email address"
            variant="secondary"
            otherClassName="max-sm:rounded-none"
          />
          <Button
            variant="primary"
            borderRadius="rounded-none sm:rounded-l-none sm:rounded-r-md"
            otherClassName="w-full sm:w-fit hover:!tracking-normal hover:border hover:border-[#088178]"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </Layer>
  );
};

export default NewsletterSignup;
