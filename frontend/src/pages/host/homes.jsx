import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';

const background = require('../../../public/img/high/hosthome.jpg');

const homes = () => {
  return (
    <div>
      <HostHomesHeader />
      <div className='w-full max-w-layout mx-auto relative'>
        <div>
          <img
            src={background}
            style={{
              maxHeight: '60rem'
            }}
            className='w-full relative object-cover h-144'
          />
        </div>
        <HostHomesCard />
        <WhyHost />
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
                <div className='w-90p'>
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
                      Share any space without sign-up charges, from a shared
                      living room to a second home and everything in-between.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-1/3'>
                <div className='w-90p'>
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
                      Share any space without sign-up charges, from a shared
                      living room to a second home and everything in-between.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-1/3'>
                <div className='w-90p'>
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
                      Share any space without sign-up charges, from a shared
                      living room to a second home and everything in-between.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homes;
