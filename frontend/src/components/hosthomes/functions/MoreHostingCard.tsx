import * as React from 'react';

interface Props {
  img: string;
}

export const MoreHostingCard: React.FC<Props> = ({ img }) => {
  return (
    <div className='w-1/3'>
      <div className='w-95p'>
        <div>
          <img className='h-full w-full rounded' src={img} alt='' />
        </div>
        <div className='my-2'>
          <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
            Setup
          </p>
        </div>
        <div className='my-1'>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-sm'>
            How to start hosting
          </p>
        </div>
        <div>
          <a
            style={{ fontFamily: 'airbnb-book' }}
            className='text-green-850 text-sm'
            href=''>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
