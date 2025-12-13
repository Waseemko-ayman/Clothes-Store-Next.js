import React from 'react';
import MotionSection from './FramerMotion/MotionSection';
import Image from 'next/image';
import Button from '../atoms/Button';
import { PATHS } from '@/mock/paths';

const EmptyCart = () => {
  return (
    <div className="py-10">
      <MotionSection index={0}>
        <Image
          src="/assets/empty-cart.png"
          alt="Empty Cart"
          width={150}
          height={150}
          className="mx-auto"
          priority
        />
      </MotionSection>
      <div className="text-center mt-5">
        <MotionSection index={1}>
          <h2 className="text-lg text-[var(--enjoy-gray-650)] font-normal mb-5">
            Your shopping basket is ready and calling you to shop!
          </h2>
        </MotionSection>
        <MotionSection index={2}>
          <Button
            href={PATHS.SHOP.ROOT}
            variant="primary"
            otherClassName="!py-2.5 !px-5"
          >
            Proceed to checkout
          </Button>
        </MotionSection>
      </div>
    </div>
  );
};

export default EmptyCart;
