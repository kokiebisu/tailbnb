import * as React from 'react';

export const SuggestionBox = () => {
  return (
    <div className='flex'>
      <div className='py-3 px-6 bg-black rounded-lg mr-3'>
        <h3
          style={{ fontFamily: 'airbnb-book' }}
          className='text-sm text-white'>
          All
        </h3>
      </div>
      <div className='py-3 px-6 border border-gray rounded-lg mr-3'>
        <h3
          style={{ fontFamily: 'airbnb-book' }}
          className='text-sm text-gray-750'>
          Stays
        </h3>
      </div>
      <div className='py-3 px-6 border border-gray rounded-lg mr-3'>
        <h3
          style={{ fontFamily: 'airbnb-book' }}
          className='text-sm text-gray-750'>
          Experiences
        </h3>
      </div>
      <div className='py-3 px-6 border border-gray rounded-lg mr-3'>
        <h3
          style={{ fontFamily: 'airbnb-book' }}
          className='text-sm text-gray-750'>
          Adventures
        </h3>
      </div>
    </div>
  );
};
