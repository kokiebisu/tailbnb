import React from 'react';

// Components
import Review from '../../components/presentational/Review';

export default ({ ratings }) => {
  return (
    <>
      <div>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='font-semibold text-2xl pb-3 pt-5 text-gray-750'>
          Reviews
        </h3>
        <div className='pb-4 border-b border-gray-300 flex items-center justify-between'>
          <div>
            <div className='flex items-center justify-start'>
              <div className='flex items-center justify-start'>
                <div>
                  <svg
                    style={{ fill: '#008489', marginBottom: 1 }}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3'
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
                  className='text-lg text-gray-750 ml-1 pr-4'
                  style={{ fontFamily: 'airbnb-bold' }}>
                  {ratings}
                </p>
              </div>
              <div
                style={{ width: 1, height: 13 }}
                className='bg-gray-400'></div>
              <div className='flex items-center justify-start'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='pl-4 text-lg text-gray-750 '>
                  264
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 pl-2'>
                  reviews
                </p>
              </div>
            </div>
          </div>
          <input
            style={{ fontFamily: 'airbnb-medium' }}
            className='w-40 text-sm border border-gray-300 rounded py-2 pl-2 placeholder-gray-900'
            type='text'
            placeholder='Search reviews'></input>
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
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className='flex items-center justify-start'>
        <button className='p-2 rounded-full ml-2 mt-4 bg-green-850'>
          <div className='flex items-center justify-center w-4 h-4 '>
            <p
              style={{ fontFamily: 'airbnb-book', marginRight: 1 }}
              className='text-sm text-white'>
              1
            </p>
          </div>
        </button>
        <button className='p-2 ml-10 mt-4'>
          <div className='flex items-center justify-center w-4 h-4 '>
            <p
              style={{ fontFamily: 'airbnb-book', marginRight: 1 }}
              className='text-sm text-green-850'>
              2
            </p>
          </div>
        </button>
        <button className='p-2 ml-10 mt-4'>
          <div className='flex items-center justify-center w-4 h-4 '>
            <p
              style={{ fontFamily: 'airbnb-book', marginRight: 1 }}
              className='text-sm text-green-850'>
              3
            </p>
          </div>
        </button>
        <button className='p-2 ml-10 mt-4'>
          <div className='flex items-center justify-center w-4 h-4'>
            <p
              style={{
                fontFamily: 'airbnb-book',
                marginRight: 1,
                marginBottom: 4
              }}
              className='text-sm text-gray-850'>
              ...
            </p>
          </div>
        </button>
        <button className='p-2 ml-10 mt-4'>
          <div className='flex items-center justify-center w-4 h-4 '>
            <p
              style={{ fontFamily: 'airbnb-book', marginRight: 1 }}
              className='text-sm text-green-850'>
              38
            </p>
          </div>
        </button>
        <button className='p-2 ml-10 mt-4'>
          <div className='border border-green-850 rounded-full p-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              style={{ fill: '#008489' }}
              viewBox='0 0 492.004 492.004'>
              <g>
                <g>
                  <path
                    d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                  />
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};
