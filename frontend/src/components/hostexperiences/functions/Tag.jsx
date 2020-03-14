import * as React from 'react';

export const Tag = () => {
  return (
    <>
      <div className='flex bg-white rounded-lg '>
        <div className='p-6'>
          <div className='w-16'>
            <img
              className='w-full h-full'
              src='https://a0.muscache.com/airbnb/static/packages/insurance@2x.e06aa9c7.png'
            />
          </div>
        </div>
        <div style={{ width: 5, backgroundColor: '#c9cba3' }}></div>
        <div
          style={{ backgroundColor: '#9b6429' }}
          className='rounded-lg rounded-l-none flex items-center justify-center'>
          <div className='w-70p'>
            <div className='py-2 px-3'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-white text-center leading-5'>
                Up to $1 million USD insurance coverage for most activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
