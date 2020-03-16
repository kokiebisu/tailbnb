import * as React from 'react';

export const HeaderCategory = ({
  dates,
  guests,
  filters,
  worktrip,
  typeofplace,
  price,
  instantbook,
  morefilters
}) => {
  return (
    <div className='px-5 md:px-0 mx-auto py-2 border-b border-gray-200'>
      <div className='mx-auto md:max-w-90% flex flex-wrap items-center justify-start'>
        {dates ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Dates
          </div>
        ) : null}
        {guests ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Guests
          </div>
        ) : null}
        {filters ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Filters
          </div>
        ) : null}
        {worktrip ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Work trip
          </div>
        ) : null}
        {typeofplace ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Type of place
          </div>
        ) : null}
        {price ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Price
          </div>
        ) : null}
        {instantbook ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            Instant Book
          </div>
        ) : null}
        {morefilters ? (
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
            More filters
          </div>
        ) : null}
      </div>
    </div>
  );
};
