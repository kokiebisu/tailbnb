import * as React from 'react';

export const HostConfidenceCheckCard = ({ title }) => {
  return (
    <div className='lg:w-1/3 flex items-center md:mb-12'>
      <div>
        <div className='w-12 h-12'>
          <svg
            viewBox='0 0 32 32'
            style={{ fill: '#008489' }}
            className='w-full h-full'>
            <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
          </svg>
        </div>
      </div>
      <div className='ml-4'>
        <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
          {title}
        </p>
      </div>
    </div>
  );
};
