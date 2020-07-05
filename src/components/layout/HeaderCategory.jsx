import * as React from 'react';
import withSizes from 'react-sizeme';

export const HeaderCategory = () => {
  return (
    <div className='px-6 md:px-10 xl:px-20 xl:max-w-12xl pb-2 pt-8'>
      <div className='flex flex-wrap items-center justify-start'>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hidden md:block hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
          Cancellation flexibility
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full'>
          Work trip
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full'>
          Type of place
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full'>
          Price
        </div>

        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
          Instant Book
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
          More filters
        </div>
      </div>
    </div>
  );
};
