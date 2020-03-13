import * as React from 'react';

interface Props {
  description: string;
}

export const CoveredCard: React.FC<Props> = ({ description }) => {
  return (
    <div className='md:w-90p mb-6 lg:mb-5'>
      <div
        style={{ fontFamily: 'airbnb-book' }}
        className='flex text-gray-750 items-center'>
        <div className='h-4 w-4'>
          <svg
            style={{ fill: '#008489' }}
            className='h-full w-full'
            viewBox='0 0 24 24'>
            <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
          </svg>
        </div>
        <div className='ml-3'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
