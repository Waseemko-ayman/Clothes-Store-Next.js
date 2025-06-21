import React from 'react';
import Container from '../atoms/Container';

const Copyrights = () => {
  const dateNow = new Date();
  return (
    <div className="text-center">
      <Container>
        <p className="text-base text-[#465b52] my-5">
          &copy; {dateNow.getFullYear()}, Programmed by Waseem Abd Elhadi
          Developer
        </p>
      </Container>
    </div>
  );
};

export default Copyrights;
