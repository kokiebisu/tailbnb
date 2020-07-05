import * as React from 'react';

export const HostHomesCard: React.FC<{}> = () => {
  return (
    <div
      id='card'
      className='bg-white rounded flex justify-center lg:justify-start'>
      <div className='w-full m-6 md:max-w-2.5xl lg:w-104 md:m-8'>
        <div className='hidden lg:block mb-6'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-850 text-4.5xl leading-none'>
            Earn money as an Airbnb host
          </h3>
        </div>
        <div className='my-1'>
          <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
            Find out what you could earn
          </p>
        </div>
        <div className='border border-gray-350 rounded'>
          <input
            type='text'
            style={{ fontFamily: 'airbnb-book' }}
            className='placeholder-gray-750 my-3 ml-3'
            placeholder='Location'
          />
        </div>
        <div className='w-full flex my-2'>
          <div className='inline-block relative w-3/5 mr-2'>
            <select
              style={{ fontFamily: 'airbnb-book' }}
              className='appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide'
              id='guests'>
              <option value='1'>Entire place</option>
              <option value='2'>Private room</option>
              <option value='3'>Shared room</option>
            </select>
            <div className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
          <div className='inline-block relative w-2/5 ml-2'>
            <select
              style={{ fontFamily: 'airbnb-book' }}
              className='appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide'
              id='guests'>
              <option style={{ fontFamily: 'airbnb-book' }} value='1'>
                1 guest
              </option>
              <option value='2'>2 guests</option>
              <option value='3'>3 guests</option>
              <option value='4'>4 guests</option>
              <option value='5'>5 guests</option>
              <option value='6'>6 guests</option>
            </select>
            <div className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex py-4'>
          <div>
            <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-4.5xl'>
              $1,162
            </h3>
          </div>
          <div style={{ marginBottom: 10 }} className='flex items-end mx-1'>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm text-gray-750'>
              per month
            </p>
          </div>
          <div style={{ marginBottom: 14 }} className='flex items-end'>
            <div className='h-3 w-3 '>
              <svg
                className='w-full h-full'
                viewBox='0 0 24 24'
                style={{ fill: '#484848' }}>
                <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z'></path>
              </svg>
            </div>
          </div>
        </div>
        <button className='w-full py-3 bg-red-550 rounded'>
          <div>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-white'>
              Get started
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
