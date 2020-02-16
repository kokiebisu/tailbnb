import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ loading }) => {
  return (
    <>
      <div className='w-25/31 sticky top-0 flex justify-center mt-5 ml-10'>
        <div className='w-full'>
          {loading ? (
            <div className='flex justify-start mb-4'>
              <Skeleton width={300} height={30} />
            </div>
          ) : (
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full py-5 text-2xl text-gray-850'>
              Add dates for prices
            </h3>
          )}

          <button
            style={{ fontFamily: 'airbnb-medium' }}
            className='w-full bg-pink-850 text-white rounded-lg py-3'>
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
};
