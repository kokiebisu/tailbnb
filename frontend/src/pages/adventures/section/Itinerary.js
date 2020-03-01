import React from 'react';

// Images
const detail2 = require('../../../../public/img/high/staydetail2.jpg');

export default () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
          Your itinerary
        </div>
        <div className='w-full md:w-8/12'>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='px-5 text-gray-750 border-l border-gray-800 relative '>
            <div
              style={{ height: 7, width: 7, top: -7, left: -3.6 }}
              className='absolute'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <p className='mb-2'>Day 1</p>
            <div className='w-full flex justify-start items-start pb-8'>
              <div className='w-5/12'>
                <img className='h-full w-full' src={detail2} alt='' />
              </div>

              <div className='w-7/12 pl-5'>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-base'>
                  Marrakech-Oughla - Tinzerte
                </p>
                <p className='text-base'>
                  Marrakech to imi oughlad small village situated 1,450m at the
                  base of Toubkal. Here we begin the gentle accent.
                </p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-green-850 text-sm mt-4'>
                  Show more
                </button>
              </div>
            </div>
            <div
              style={{ height: 7, width: 7, bottom: -7, left: -3.6 }}
              className='absolute z-100'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='relative px-5 text-gray-750'>
            <p className='mb-2'>Day 2</p>
            <div className='w-full flex justify-start items-start pb-8'>
              <div className='w-5/12'>
                <img className='h-full w-full' src={detail2} alt='' />
              </div>

              <div className='w-7/12 pl-5'>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-base'>
                  Tizerte - Ouirgane - Marrakech
                </p>
                <p className='text-base'>
                  The day's trek will take you through the villages of Imariren
                  Noufla and Anraz. A picnic style lunch will be enjoyed..
                </p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-green-850 text-sm mt-4'>
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
