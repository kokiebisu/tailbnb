import React from 'react';

export default () => {
  return (
    <div className='mt-12 border-b border-gray-300'>
      <div className='py-4 border-b border-gray-300'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-750 text-2xl'>
          The neighborhood
        </h3>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-gray-750 pt-3 pb-2'>
          Maria Henriqueta's place is located in Penafiel, Porto, Portugal.
        </p>
        <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750 py-2'>
          Residential area of Isla Mujeres is unique..away from the tourists and
          busy hotels...you can enjoy the stars at night and be incredibly
          tranquil.
        </p>
        <button
          style={{ fontFamily: 'airbnb-medium' }}
          className='mt-3 mb-5 text-green-850'>
          <div className='flex items-center justify-start'>
            <p
              className='text-green-850 hover:border-green-850 border-b text-green-850 border-transparent'
              style={{ fontFamily: 'airbnb-medium' }}>
              Read about the neighborhood
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
        <div className='bg-blue-500 h-64'></div>
        <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750 mt-2'>
          The map shows this place’s specific location.
        </p>
      </div>
    </div>
  );
};
