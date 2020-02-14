import React from 'react';

export default () => {
  return (
    <div className='border-b border-gray-300 mt-4'>
      <div className='border-gray-300'>
        <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
          Cancellations
        </h3>
        <div className=''>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='mt-4 text-gray-750'>
            Free cancellation for 48 hours
          </p>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            After that, cancel up to 7 days before check-in and get a 50%
            refund, minus the service fee.
          </p>
        </div>
        <button className='mb-4 mt-2'>
          <div className='flex items-center justify-start'>
            <p
              className='text-green-850 hover:border-green-850 border-b text-green-850 border-transparent'
              style={{ fontFamily: 'airbnb-medium' }}>
              Read more about the policy
            </p>
            <div className='ml-3'>
              <svg
                style={{ fill: '#008489' }}
                viewBox='0 0 18 18'
                className='h-2 w-2'>
                <path d='m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z' />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
