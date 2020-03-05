import React from 'react';

export default () => {
  return (
    <div className='w-70v md:w-40v lg:w-72 flex justify-start items-start flex-wrap'>
      <div className='w-full border border-gray-300 bg-white shadow-md rounded-xl mr-4'>
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
            className='w-2/3 text-gray-750 whitespace-normal py-1 leading-loose'>
            From $130/person
          </p>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-650 text-lg whitespace-normal '>
            Join 3 other guests
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
