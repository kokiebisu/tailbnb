import * as React from 'react';

export const ThreeColumnCard = ({ img, category, title, description }) => {
  return (
    <div className=''>
      <div className='w-full'>
        <div>
          <img
            className='w-full h-full rounded-xl'
            src={img}
            alt='adventure1'
          />
        </div>
        <div className='mt-2 mb-1'>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='uppercase text-gray-650 text-xs'>
            {category}
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-start'>
          <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
            {title}
          </p>
        </div>
        <div>
          <p
            id='line-clamp'
            style={{ fontFamily: 'airbnb-book' }}
            className='whitespace-normal my-1 text-sm text-gray-750'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
