import * as React from 'react';

export const HereAlwaysCheck = ({ title }) => {
  return (
    <div className='w-90p'>
      <div className='flex my-5'>
        <div className='w-5 h-5'>
          <svg
            viewBox='0 0 24 24'
            style={{ fill: '#008489' }}
            className='w-full h-full'>
            <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
          </svg>
        </div>
        <div className='ml-4'>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
