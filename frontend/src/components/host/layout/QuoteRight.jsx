import * as React from 'react';

export const QuoteRight = ({ title, description, img }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img className='h-full w-full' src={img} />
      </div>
      <div className='w-full md:w-1/2 relative flex items-center md:justify-end'>
        <div className='md:w-85p'>
          <div id='quote__right'>
            <p
              style={{
                fontFamily: 'circular-std-medium'
              }}
              className='text-6xl md:text-7xl lg:text-10xl text-yellow-850'>
              “
            </p>
          </div>
          <div className=''>
            <div className='mt-12'>
              <div className='md:w-85p'>
                <p
                  id='quote__description'
                  style={{
                    fontFamily:
                      'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                  }}
                  className='text-lg lg:text-3xl text-gray-750 leading-tight'>
                  {title}
                </p>
              </div>
            </div>
            <div className=''>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-sm md:text-base text-gray-650 my-4'>
                Jack hosts in Brisbane to earn extra money
              </p>
            </div>
            <button>
              <div className='py-3 px-5 border-2 border-gray-850 rounded'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-850'>
                  Learn how they host
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
