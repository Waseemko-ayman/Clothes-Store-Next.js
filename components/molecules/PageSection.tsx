import React, { ReactNode } from 'react';
import CardWrapper from '../Template/CardWrapper';
import AnimatedWrapper from './FramerMotion/AnimatedWrapper';

const PageSection = ({
  icon,
  title,
  children,
  highlight = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  highlight?: boolean;
}) => (
  <AnimatedWrapper>
    <CardWrapper
      otherClassName={
        highlight ? '!bg-primary/3 !border-border' : 'bg-card border-border'
      }
    >
      <div>
        <div className="mb-4 flex flex-col item-center max-md:justify-center md:items-start md:flex-row gap-3">
          <div className="rounded-lg bg-primary/10 p-2 max-md:flex max-md:items-center max-md:justify-center max-md:w-fit max-md:mx-auto">{icon}</div>
          <h2 className="text-2xl font-semibold text-card-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </CardWrapper>
  </AnimatedWrapper>
);

export default PageSection;
