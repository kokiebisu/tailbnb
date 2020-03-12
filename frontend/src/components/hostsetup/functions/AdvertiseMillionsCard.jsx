import * as React from 'react';

export const AdvertiseMillionsCard = ({ title, description, link }) => {
  return (
    <div className='w-full lg:w-1/3 mb-8 lg:mb-0'>
      <div className='w-90p lg:w-80p'>
        <div className='mt-2 mb-3 lg:my-2'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-2xl'>
            {title}
          </h3>
        </div>
        <div>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-gray-750'>
            {description}
          </p>
        </div>
        {link ? (
          <div className='my-3'>
            <a
              style={{ fontFamily: 'airbnb-book' }}
              className='text-green-850'
              href=''>
              {link}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
