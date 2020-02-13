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
          className='mt-3 mb-5 hover:border-green-850 border-b text-green-850 border-transparent'>
          Read more about the neighbourhood
        </button>
        <div className='bg-blue-500 h-64'></div>
        <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750 mt-2'>
          The map shows this place’s specific location.
        </p>
      </div>
    </div>
  );
};
