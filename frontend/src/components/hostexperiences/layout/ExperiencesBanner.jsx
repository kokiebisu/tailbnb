import * as React from 'react';

export const ExperienceBanner = () => {
  return (
    <>
      <div
        id='hostexperience__banner'
        className='w-full h-156 bg-white flex items-center justify-center'>
        <div className='lg:max-w-5.5xl'>
          <div className='my-4'>
            <p
              style={{ fontFamily: 'airbnb-bold' }}
              className='uppercase text-sm text-gray-750'>
              Host an experience on Airbnb
            </p>
          </div>
          <div className='my-3'>
            <h3
              id='hostexperience__banner-title'
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-7xl tracking-tighter leading-20'>
              Earn money leading people on activities you love.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
