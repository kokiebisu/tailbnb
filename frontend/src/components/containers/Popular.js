import React from 'react';

// Components
import Location from '../cards/Location';

export default () => {
  const locations = [
    {
      location: 'San Francisco',
      price: 216
    },
    {
      location: 'Los Angeles',
      price: 213
    },
    {
      location: 'New York',
      price: 159
    },
    {
      location: 'Seattle',
      price: 134
    },
    {
      location: 'Denver',
      price: 128
    },
    {
      location: 'Washington DC',
      price: 166
    },
    {
      location: 'Phoenix',
      price: 232
    },
    {
      location: 'Austin',
      price: 242
    },
    {
      location: 'Houston',
      price: 351
    },
    {
      location: 'New Orleans',
      price: 210
    }
  ];
  return (
    <>
      <div className='flex flex-wrap items-center justify-start w-full'>
        {locations.map(({ location, price }) => {
          return (
            <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
              <Location location={location} price={price} />
            </div>
          );
        })}
      </div>
    </>
  );
};
