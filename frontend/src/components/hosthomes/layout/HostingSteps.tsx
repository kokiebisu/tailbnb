import * as React from 'react';

const quote = require('../../../../public/img/high/host-quote.jpg');

export const HostingSteps: React.FC<{}> = () => {
  return (
    <div className='w-full max-w-5xl mx-auto py-8'>
      <div className='flex justify-center'>
        <div
          style={{ width: 70, height: 2 }}
          className='bg-gray-650 rounded-lg'></div>
      </div>

      <div className='flex justify-center mb-12 mt-2'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-850 text-6xl tracking-tight'>
          Hosting in 3 steps
        </h3>
      </div>
      <div>
        <div className='w-full flex'>
          <div className='w-1/3'>
            <div className='w-85p'>
              <div className='h-12 w-12'>
                <svg
                  className='h-full w-full'
                  viewBox='0 0 32 32'
                  style={{ fill: '#484848' }}>
                  <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
                </svg>
              </div>
              <div className='my-4'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-2xl'>
                  List your space for free
                </h3>
              </div>
              <div>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 leading-loose'>
                  Share any space without sign-up charges, from a shared living
                  room to a second home and everything in-between.
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='w-85p'>
              <div className='h-12 w-12'>
                <svg
                  className='h-full w-full'
                  viewBox='0 0 32 32'
                  style={{ fill: '#484848' }}>
                  <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
                </svg>
              </div>
              <div className='my-4'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-2xl'>
                  Decide how you want to host
                </h3>
              </div>
              <div>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 leading-loose'>
                  Choose your own schedule, prices, and requirements for guests.
                  We're there to help along the way.
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='w-85p'>
              <div className='h-12 w-12'>
                <svg
                  className='h-full w-full'
                  viewBox='0 0 32 32'
                  style={{ fill: '#484848' }}>
                  <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
                </svg>
              </div>
              <div className='my-4'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-2xl'>
                  Welcome your first guest
                </h3>
              </div>
              <div>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 leading-loose'>
                  Once your listing is live, qualified guests can reach out. You
                  can message them with any questions before their stay.
                </p>
              </div>
              <div className='mt-4'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-green-850'
                  href=''>
                  Learn how to start hosting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-5xl mx-auto pt-32 pb-16 flex'>
        <div className='w-1/2 relative'>
          <div className='absolute' style={{ top: -40 }}>
            <p
              style={{
                fontFamily: 'circular-std-medium'
              }}
              className='text-10xl text-yellow-850'>
              “
            </p>
          </div>
          <div className='mt-12'>
            <div className='w-85p'>
              <p
                style={{
                  fontFamily:
                    'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                }}
                className='text-4xl text-gray-750 leading-tight'>
                The Host Guarantee helped me decide to join Airbnb because I
                have it to fall back on if there's damage or problems.
              </p>
            </div>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-650 my-4'>
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
        <div className='w-1/2'>
          <img className='h-full w-full' src={quote} />
        </div>
      </div>
    </div>
  );
};
