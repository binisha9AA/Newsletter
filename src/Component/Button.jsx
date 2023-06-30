import React from 'react';

export const Button = ({ buttonText, handleSubmission }) => {
  return (
    <>
      <button
        className="bg-[#2e3245] text-white h-14 rounded-md "
        type="button"
        onClick={handleSubmission}
      >
        <h3 className="font-bold">{buttonText}</h3>
      </button>
    </>
  );
};
