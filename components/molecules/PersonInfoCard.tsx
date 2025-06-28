import React from 'react';
import Avatar from '../atoms/Avatar';

interface InfoProps {
  id: number;
  infoText: string;
}

interface PersonInfoCardProps {
  personName: string;
  imgSrc: string;
  imgAlt: string;
  imgTitle: string;
  information: InfoProps;
}

const PersonInfoCard = ({
  personName,
  imgSrc,
  imgAlt,
  imgTitle,
  information,
}: PersonInfoCardProps) => {
  return (
    <div className="flex items-start gap-3.5 not-last:mb-[30px]">
      <Avatar imgSrc={imgSrc} imgAlt={imgAlt} imgTitle={imgTitle} />
      <div>
        <span className="text-[var(--fifth-color)] font-bold">
          {personName}
        </span>
        <ul className="mt-1">
          {information.map(({ id, infoText }: InfoProps) => (
            <li key={id} className="text-[var(--six-color)] text-[15px]">
              {infoText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonInfoCard;
