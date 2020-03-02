import React from 'react';

export default ({ title, description, order }) => {
  return (
    <>
      {order === 'top' ? (
        <div className='w-full flex pb-4 border-b border-gray-300'>
          <div className='w-1/3'>
            <h3 style={{ fontFamily: 'airbnb-medium' }} className='text-2xl'>
              {title}
            </h3>
          </div>
          <div className='w-2/3'>
            <p style={{ fontFamily: 'airbnb-book' }}>{description}</p>
            <button
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-green-850 text-sm my-3'>
              Learn more
            </button>
          </div>
        </div>
      ) : (
        <>
          {order === 'bottom' ? (
            <div className='w-full flex pb-4 pt-6'>
              <div className='w-1/3'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-2xl'>
                  {title}
                </h3>
              </div>
              <div className='w-2/3'>
                <p style={{ fontFamily: 'airbnb-book' }}>{description}</p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-green-850 text-sm my-3'>
                  Learn more
                </button>
              </div>
            </div>
          ) : (
            <div className='w-full flex pb-4 pt-6 border-b border-gray-300'>
              <div className='w-1/3'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-2xl'>
                  {title}
                </h3>
              </div>
              <div className='w-2/3'>
                <p style={{ fontFamily: 'airbnb-book' }}>{description}</p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-green-850 text-sm my-3'>
                  Learn more
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
