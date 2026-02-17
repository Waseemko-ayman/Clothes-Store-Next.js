import React from 'react';
import MotionSection from './FramerMotion/MotionSection';
import Image from 'next/image';
import Button from '../atoms/Button';
import { PATHS } from '@/data/paths';

type EmptyStateProps = {
  imageSrc: string;
  messageText: string;
  buttonText: string;
  description?: string;
  handleClick?: () => void;
  Icon?: React.ElementType;
};

const EmptyState = ({
  imageSrc,
  messageText,
  buttonText,
  description,
  handleClick,
  Icon,
}: EmptyStateProps) => {
  return (
    <div className="py-10">
      <MotionSection index={0}>
        <Image
          src={`/assets/${imageSrc}`}
          alt="Empty State Image"
          width={150}
          height={150}
          className="mx-auto"
          priority
        />
      </MotionSection>
      <div className="text-center mt-5">
        <MotionSection index={1}>
          <h2 className="text-lg font-normal text-foreground">{messageText}</h2>
        </MotionSection>
        {description && (
          <MotionSection index={2}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </MotionSection>
        )}
        <MotionSection index={description ? 3 : 2}>
          <Button
            href={PATHS.SHOP.ROOT}
            variant="primary"
            Icon={Icon}
            otherClassName="!py-2.5 !px-5 mt-3 mx-auto inline-flex"
            handleClick={handleClick}
          >
            {buttonText}
          </Button>
        </MotionSection>
      </div>
    </div>
  );
};

export default EmptyState;
