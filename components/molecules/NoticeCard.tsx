import React from 'react';
import CardWrapper from '../Template/CardWrapper';

type NoticeCardProps = {
  icon: React.ReactNode;
  title?: string;
  children: React.ReactNode;
};

const NoticeCard = ({ icon, title, children }: NoticeCardProps) => {
  return (
    <CardWrapper otherClassName="!bg-gray-100 mt-8">
      <div className="flex gap-3">
        <div className="shrink-0 mt-0.5">{icon}</div>
        <div>
          {title && (
            <h3 className="font-medium text-foreground mb-1">{title}</h3>
          )}
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default NoticeCard;
