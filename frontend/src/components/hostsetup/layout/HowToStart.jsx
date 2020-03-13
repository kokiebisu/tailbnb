import * as React from 'react';

// Images
const howToStart = require('../../../../public/img/high/how-to-start.jpg');

export const HowToStart = () => {
  return (
    <div>
      <div className='bg-gray-100'>
        <div className='mt-8 md:mt-0 w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5.5xl mx-auto pt-8 pb-16'>
          <div className='w-full lg:max-w-2xl mx-auto md:mt-12 lg:mt-0'>
            <div className='flex flex-col items-start md:items-center'>
              <div className='my-4'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 uppercase text-sm'>
                  Setup
                </p>
              </div>
              <div className='mb-8'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-4xl md:text-5xl lg:text-6xl tracking-tighter'>
                  How to start hosting
                </h3>
              </div>
              <div className='w-95p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-lg lg:text-2xl text-gray-750 leading-7 md:text-center'>
                  Listing a home on Airbnb has never been easier or more
                  customizable. You’re just a few steps away from earning money
                  and reaching millions of global travellers.
                </p>
              </div>
              <div className='mt-12 lg:mt-16 mb-28'>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='bg-red-550 px-5 py-3 text-white rounded'>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ bottom: 120 }}
        className='w-full max-w-2xl lg:max-w-5xl mx-auto relative'>
        <div className='flex justify-center'>
          <div className='mx-6 md:mx-0 w-full md:h-80 lg:h-112'>
            <img className='w-full h-full' src={howToStart} />
          </div>
        </div>
      </div>
    </div>
  );
};
