import * as React from 'react';

const quote = require('../../../../public/img/high/host-steps-quote.jpg');

export const QuoteLeft = () => {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2 relative'>
          <div id='quote__steps'>
            <p
              style={{
                fontFamily: 'circular-std-medium'
              }}
              className='text-6xl md:text-7xl lg:text-10xl text-yellow-850'>
              “
            </p>
          </div>
          <div className='mt-12'>
            <div className='md:w-85p'>
              <p
                id='quote-description'
                style={{
                  fontFamily:
                    'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                }}
                className='md:text-lg md:leading-relaxed lg:text-4xl text-gray-750 lg:leading-tight'>
                The Host Guarantee helped me decide to join Airbnb because I
                have it to fall back on if there's damage or problems.
              </p>
            </div>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm md:text-base text-gray-650 my-4'>
              Olivia hosts in Paris for the flexibility it provides
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
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={quote} />
        </div>
      </div>
    </>
  );
};
