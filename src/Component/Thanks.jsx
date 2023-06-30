import React from 'react';
import { Button } from './Button';
import success from '../assets/images/icon-success.svg';

export default function Thanks({ buttonText, handleButtonClick }) {
  return (
    <div className="bg-white md:bg-[#36384d] w-full h-[100vh] md:flex justify-center items-center">
      <div className="h-[100%] mx-auto flex flex-col gap-9 max-w-[380px]  px-4 py-28 md:bg-white rounded-2xl md:py-5 md:px-9 md:max-h-[400px]">
        <div>
          <img src={success} alt="" />
          <h2 className="my-5 bold text-4xl">Thanks for Subscribing!</h2>
          <div>
            <p>
              A confirmation email has been sent to
              <span className="bold"> ash@loremcompanu.com</span>. Please open
              it and click the inside to confirm your suscription.
            </p>
          </div>
        </div>
        <Button buttonText={buttonText} handleSubmission={handleButtonClick} />
      </div>
    </div>
  );
}
