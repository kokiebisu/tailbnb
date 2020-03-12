import * as React from 'react';

export const FindOutCard = () => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16 rounded-lg shadow-lg border border-gray-300'>
      <div className='py-16'>
        <div className='mb-8 flex justify-center'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-3.5xl text-gray-750'>
            Find out how much you can earn from your space
          </h3>
        </div>
        <div className='flex justify-center'>
          <div className='flex'>
            <div className='w-72'>
              <div className='mb-2'>
                <div className='border border-gray-350 rounded'>
                  <input
                    type='text'
                    style={{ fontFamily: 'airbnb-book' }}
                    className='placeholder-black my-3 ml-3'
                    placeholder='Vancouver'
                  />
                </div>
              </div>
              <div className='mb-2'>
                <div>
                  <select
                    style={{ fontFamily: 'airbnb-book' }}
                    className='appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide text-gray-750'
                    id='guests'>
                    <option value='1'>Entire place</option>
                    <option value='2'>Private room</option>
                    <option value='3'>Shared room</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <select
                    style={{ fontFamily: 'airbnb-book' }}
                    className='appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide text-gray-750'
                    id='guests'>
                    <option value='1'>1 guest</option>
                    <option value='2'>2 guests</option>
                    <option value='3'>3 guests</option>
                    <option selected='selected' value='4'>
                      4 guests
                    </option>
                    <option value='5'>5 guests</option>
                    <option value='6'>6 guests</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ width: 1 }} className='bg-gray-650 mx-16'></div>
            <div>
              <div className='text-gray-750'>
                <div>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-6xl'>
                    $1,169
                  </h3>
                </div>
                <div className='flex mb-2'>
                  <div>
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-xs'>
                      per month
                    </p>
                  </div>
                  <div className='h-3 w-3 mx-1'>
                    <svg
                      className='w-full h-full'
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848', marginTop: 4 }}>
                      <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z'></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='bg-red-550 text-white rounded px-12 py-3'>
                  Check availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
