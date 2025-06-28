import React from 'react';
import RepairServices from './Sections/RepairServices';
import Visit from './Sections/Visit';
import LeaveMessage from './Sections/LeaveMessage';

const ContactPage = () => {
  return (
    <>
      <RepairServices />
      <Visit />
      <LeaveMessage />
    </>
  );
};

export default ContactPage;
