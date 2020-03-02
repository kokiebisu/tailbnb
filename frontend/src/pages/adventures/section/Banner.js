import React from 'react';

// Function
import BannerCard from '../functions/BannerCard';

export default () => {
  return (
    <div className='w-full bg-black h-80v flex justify-center'>
      <div className='w-full max-w-6xl h-full'>
        <div className='bg-red-500 h-1/2'> hello</div>
        <div className='w-full lg:max-w-6xl h-1/2 flex justify-start items-start flex-wrap'>
          <div className='w-full md:w-4/12 h-full'>
            <div className='items-end justify-start pt-6 text-xs uppercase text-white'>
              2-Day Adventure
            </div>

            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full text-4xl text-white '>
              Atlas Mountains Experience
            </p>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full text-white '>
              Marrakech, Morocco
            </p>
            <div className='flex justify-start text-white my-2'>
              <p style={{ fontFamily: 'airbnb-bold' }}>5.0</p>
              <div className='h-3 w-3 mx-1'>
                <svg
                  className='w-full h-full'
                  style={{ fill: '#ffffff', marginTop: 6 }}
                  viewBox='0 0 511.99143 511'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657' />
                </svg>
              </div>
              <p>(1)</p>
            </div>
            <div className='flex justify-start'>
              <div
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded'>
                Hiking
              </div>
              <div
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded'>
                Trekking
              </div>
            </div>
          </div>
          <div className='w-full md:w-8/12 h-full'>
            <div className='w-9/12 mt-4 ml-4'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-white text-lg py-10'>
                Trek & Cook with the berbers
              </p>
              <div className='w-full flex justify-start flex-wrap'>
                <div className='flex w-1/2'>
                  <BannerCard type='Duration' value={2} />
                  <BannerCard type='Group size' value={6} />
                </div>
                <div className='flex w-1/2'>
                  <BannerCard type='Activity level' value='moderate' />
                  <BannerCard type='Hosted in' value='English' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
