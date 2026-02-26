import React from 'react';

const ContactInformation = ({
  title,
  info,
}: {
  title: string;
  info: string;
}) => {
  return (
    <p className="mb-0.5">
      <span className="text-(--forth-color) font-bold">{title}:</span> {info}
    </p>
  );
};

export default ContactInformation;
