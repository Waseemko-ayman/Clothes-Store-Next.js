import React from 'react';

const FormErrorAlert = ({ error }: { error: string }) => {
  return (
    <>
      {error && (
        <div
          className="text-[#991b1b] bg-[#fef2f2] border border-[#fecaca] mb-6 p-4 rounded-lg"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}
    </>
  );
};

export default FormErrorAlert;
