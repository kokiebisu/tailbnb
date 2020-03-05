import React from 'react';

export default () => {
  return (
    <div className='w-full flex justify-start items-start flex-wrap'>
      <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
        <div className='m-8'>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-gray-750 text-2xl py-1'>
            Mar 03
          </h3>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-lg'>
            Tuesday
          </p>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-lg'>
            From $130/person
          </p>
          <button
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-green-850 mt-8'>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
