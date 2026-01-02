import React from 'react';
import AnimatedWrapper from './FramerMotion/AnimatedWrapper';

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <AnimatedWrapper key={index} custom={index}>
        <li className="flex items-start text-left gap-3">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="leading-relaxed text-card-foreground">{item}</span>
        </li>
      </AnimatedWrapper>
    ))}
  </ul>
);

export default BulletList;
