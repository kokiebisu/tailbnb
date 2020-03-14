import * as React from 'react';

// interface HTMLSelectElement {
//   selected: HTMLSelectElement;
// }

export const FindOutCard: React.FC<{}> = () => {
  return (
    <div className='w-full px-6 md:px-8 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto py-4 lg:pt-8 lg:pb-16 rounded-lg md:shadow-lg md:border border-gray-300 z-50'>
      <div className='md:mx-2 py-8 lg:py-16'>
        <div className='mb-2 lg:mb-8 flex md:justify-center'>
          <div className='md:w-80p lg:w-full flex md:justify-center'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-xl md:text-2xl lg:text-3.5xl text-gray-750'>
              Find out how much you can earn from your space
            </h3>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-full md:mx-16 lg:mx-0 lg:flex lg:w-auto'>
            <div className='w-full lg:w-72'>
              <div className='mb-2'>
                <div className='border border-gray-350 rounded'>
                  <input
                    type='text'
                    style={{ fontFamily: 'airbnb-book' }}
                    className='placeholder-black my-1 md:my-3 ml-3 text-sm md:text-base'
                    placeholder='Vancouver'
                  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col'>
                <div className='mb-2 md:w-2/3 lg:w-auto md:mr-2 lg:mr-0 relative'>
                  <div>
                    <select
                      style={{ fontFamily: 'airbnb-book' }}
                      className='appearance-none pl-2 w-full border border-gray-450 py-1 md:py-3 rounded placeholder-gray-900 tracking-wide text-gray-750 text-sm md:text-base'
                      id='guests'>
                      <option value='1'>Entire place</option>
                      <option value='2'>Private room</option>
                      <option value='3'>Shared room</option>
                    </select>
                  </div>
                  <div className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'>
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
                <div className='md:w-1/3 lg:w-auto md:ml-2 lg:ml-0 relative'>
                  <div>
                    <select
                      style={{ fontFamily: 'airbnb-book' }}
                      className='appearance-none pl-2 w-full border border-gray-450 py-1 md:py-3 rounded placeholder-gray-900 tracking-wide text-gray-750 text-sm md:text-base'
                      id='guests'>
                      <option value='1'>1 guest</option>
                      <option value='2'>2 guests</option>
                      <option value='3'>3 guests</option>
                      <option selected={true} value='4'>
                        4 guests
                      </option>
                      <option value='5'>5 guests</option>
                      <option value='6'>6 guests</option>
                    </select>
                  </div>
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
            </div>
            <div
              style={{ width: 1 }}
              className='hidden lg:block bg-gray-650 mx-16'></div>
            <div className='mt-0'>
              <div className='text-gray-750'>
                <div className='flex lg:flex-col items-end lg:items-start'>
                  <div className='my-2 md:my-0'>
                    <h3
                      style={{ fontFamily: 'airbnb-bold' }}
                      className='text-4xl lg:text-6xl'>
                      $1,169
                    </h3>
                  </div>
                  <div className='flex mb-4 ml-1 md:ml-0 md:mb-2'>
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
              </div>
              <div>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='bg-red-550 text-white rounded px-12 py-3 w-full lg:w-auto'>
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
