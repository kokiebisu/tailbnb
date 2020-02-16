import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ loading }) => {
  return (
    <>
      <div className='shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10'>
        <div className='w-full lg:flex-col flex mx-10 items-center justify-between'>
          {loading ? (
            <div className='flex justify-start mb-4'>
              <Skeleton width={300} height={30} />
            </div>
          ) : (
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-md lg:w-full py-5 lg:text-2xl text-gray-850'>
              Add dates for prices
            </h3>
          )}

          <button
            style={{ fontFamily: 'airbnb-medium' }}
            className='px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap'>
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
};
