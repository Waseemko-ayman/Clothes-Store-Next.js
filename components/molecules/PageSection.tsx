import React, { ReactNode } from 'react';
import AnimatedWrapper from './FramerMotion/AnimatedWrapper';
import { Button } from './MovingBorders';

const PageSection = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <AnimatedWrapper>
    <Button>
      <div className="p-5">
        <div className="mb-4 flex flex-col item-center max-md:justify-center md:items-start md:flex-row gap-3">
          <div className="rounded-lg bg-primary/10 p-2 max-md:flex max-md:items-center max-md:justify-center max-md:w-fit max-md:mx-auto">
            {icon}
          </div>
          <h2 className="text-2xl font-semibold text-card-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </Button>
  </AnimatedWrapper>
);

export default PageSection;
