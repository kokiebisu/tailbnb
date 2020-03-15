import * as React from 'react';

export const HowToStartCard = ({ number, title, description }) => {
  return (
    <div className='bg-gray-150 px-6 pt-8 pb-16'>
      <div className='mb-6'>
        <div className='border-2 border-black rounded-full w-10 h-10 flex items-center justify-center'>
          <div className=''>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-xl'>
              {number}
            </p>
          </div>
        </div>
      </div>
      <div className='mb-6'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-2xl leading-7 text-gray-750'>
          {title}
        </h3>
      </div>
      <div>
        <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
          {description}
        </p>
      </div>
    </div>
  );
};
