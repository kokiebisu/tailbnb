import * as React from 'react';

export const CharacteristicCard = ({ children, title, description }) => {
  return (
    <>
      <div className='mb-8 lg:mb-0 my-16'>
        <div className='w-90p'>
          {children && (
            <div>
              <div className='h-12 w-12'>{children}</div>
            </div>
          )}
          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
