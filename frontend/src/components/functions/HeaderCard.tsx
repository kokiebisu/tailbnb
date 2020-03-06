import * as React from 'react';

export const HeaderCard: React.FC<{}> = () => {
  return (
    <div className='sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4'>
      <div className='mx-4 md:mx-8'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='hidden md:inline-block md:text-3xl text-gray-750 leading-tight'>
          Book unique places to <br />
          stay and things to do.
        </h3>
        <form>
          <div className=''>
            <label
              style={{ fontFamily: 'airbnb-bold' }}
              className='block mt-5 mb-2 text-xs text-gray-750 uppercase tracking-wider'
              htmlFor='where'>
              Where
            </label>
            <input
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide'
              type='text'
              id='where'
              placeholder='Anywhere'
            />
          </div>
          <div className='flex flex-wrap items-stretch justify-start'>
            <div className='w-1/2'>
              <label
                style={{ fontFamily: 'airbnb-bold' }}
                className='block mt-5 mb-2 text-xs text-gray-750 uppercase'
                htmlFor='checkin'>
                Check-In
              </label>
              <input
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkin'
                placeholder='dd-mm-yyyy'
              />
            </div>
            <div className='w-1/2'>
              <label
                style={{ fontFamily: 'airbnb-bold' }}
                className='block mt-5 mb-2 text-xs uppercase text-gray-750'
                htmlFor='checkout'>
                Check-Out
              </label>
              <input
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkout'
                placeholder='dd-mm-yyyy'
              />
            </div>
          </div>
          <div>
            <label
              style={{ fontFamily: 'airbnb-bold' }}
              className='block mt-5 mb-2 text-xs uppercase text-gray-750'
              htmlFor='guests'>
              Guests
            </label>
            <div className='inline-block relative w-full'>
              <select
                style={{ fontFamily: 'airbnb-book' }}
                className='appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'
                id='guests'>
                <option value='1'>2 Guests</option>
                <option value='2'>3 Guests</option>
                <option value='3'>4 Guests</option>
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
        </form>
        <div className='w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg'>
          <button className='w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-550 rounded text-white font-bold'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
