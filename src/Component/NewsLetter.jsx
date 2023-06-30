import React from 'react';
import { Button } from './Button';
import icon from '../assets/images/icon-list.svg';
import dtimage from '../assets/images/illustration-sign-up-desktop.svg';
import mbimage from '../assets/images/illustration-sign-up-mobile.svg';
import { useState } from 'react';
import Thanks from './Thanks';

export const NewsLetter = ({ buttonText }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  console.log('ghank you', isThankYouVisible);
  const handleOnClick = (e) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Email field cannott be nulll');
    } else if (!isValidEmail(email)) {
      setErrorMessage('Valid email required');
    } else {
      setErrorMessage('');
      setIsThankYouVisible(true);
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const updates = [
    {
      id: 0,
      list: 'Product discover and building what matters',
    },
    {
      id: 1,
      list: 'Measuring to ensure updates are a sucess',
    },
    {
      id: 2,
      list: 'Add much more!',
    },
  ];
  return (
    <>
      {isThankYouVisible === false ? (
        <div className="wrapper bg-white text-black md:bg-[#36384d] md:text-white h-[100vh]">
          <div className=" container flex flex-col  medium md:flex-row-reverse items-center justify-center md:bg-white md:w-[50%] md:relative top-[20%] left-[20%] md:rounded-3xl md:p-8 md:gap-5">
            <div className="left_section w-full">
              <img
                srcSet={`${mbimage} 1x, ${dtimage} 2x`}
                alt=""
                className="w-full md:max-h-[550px]"
              />
            </div>
            <div className="right_section px-5 pt-9 md:px-0 md:pt-0 ">
              <div>
                <h1 className="bold text-[#2e3245] text-[40px]">
                  Stay updated!
                </h1>
                <div className="text-lg my-6 md:text-black">
                  <p>
                    Join 60,000 product managers receiving monthly updates on:
                  </p>
                  <ul className="mt-4">
                    {updates.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-2 mb-3"
                        >
                          {' '}
                          <img src={icon} />
                          <li className=" md:text-black">{item.list}</li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <form className=" form flex flex-col">
                <label className="bold text-base text-[#2e3245] mb-2">
                  Email address
                </label>
                {errorMessage && (
                  <h3 className="text-red-500 mb-2">{errorMessage}</h3>
                )}
                <input
                  type="text"
                  placeholder="email@company.com"
                  className="border-2 border-zinc-300 h-14 rounded-md indent-4 mb-5 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                  buttonText={'Subscribe to monthly newsletter'}
                  handleSubmission={handleOnClick}
                  // onClick={showMessage}
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Thanks
          buttonText="Dismiss Message"
          handleButtonClick={() => setIsThankYouVisible(false)}
        />
      )}
    </>
  );
};
