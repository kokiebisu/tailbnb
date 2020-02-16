import React from 'react';

// Components
import Review from '../../components/presentational/Review';

export default ({ ratings, reviews }) => {
  return (
    <>
      <div className='my-4 lg:border-b lg:border-gray-300'>
        <div className='py-4 flex items-center justify-start'>
          <div className='flex items-center justify-start'>
            <div className=''>
              <svg
                style={{ fill: '#008489', marginBottom: 1 }}
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 37.286 37.287'>
                <g>
                  <path
                    d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
    c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
    c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
    c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
    c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
    C37.425,15.013,37.226,15.808,36.683,16.339z'
                  />
                </g>
              </svg>
            </div>
            <p
              id='line'
              className='text-2xl text-gray-850 ml-3'
              style={{ fontFamily: 'airbnb-medium' }}>
              {ratings}
            </p>
          </div>

          <div className='flex items-center justify-start'>
            <p
              style={{ fontFamily: 'airbnb-medium' }}
              className='ml-1 text-2xl text-gray-850 '>
              ({reviews} reviews)
            </p>
          </div>
        </div>

        <div className='mt-3 flex flex-wrap items-start justify-start'>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Location</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                5.0
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Communication</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                4.9
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Cleanliness</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                4.9
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Check-in</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                4.9
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Accuracy</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                4.8
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='py-1 flex items-center justify-between w-1/2'>
            <p className='text-gray-750'>Value</p>
            <div className='flex items-center justify-start'>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 pr-8'>
                4.8
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-start justify-start flex-wrap w-full'>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
          <div className='w-full lg:w-1/2 border-b border-gray-300'>
            <Review />
          </div>
        </div>
        <div className='py-10'>
          <button
            style={{ fontFamily: 'airbnb-medium' }}
            className='py-3 px-5 rounded-xl border border-black'>
            Show all 387 reviews
          </button>
        </div>
      </div>
    </>
  );
};
