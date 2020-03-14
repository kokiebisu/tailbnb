import * as React from 'react';

export const CharacteristicCard = ({ children, title, description, link }) => {
  return (
    <>
      <div className='mb-4 lg:mb-0'>
        <div className='w-95p'>
          {children && <div className='mb-4 mt-12'>{children}</div>}
          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='leading-8 text-gray-750'>
              {description}
            </p>
          </div>
          {link && (
            <div className='my-3'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850'>
                {link}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
