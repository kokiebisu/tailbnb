import React from 'react';

// Components
import Location from '../presentational/Location';

export default () => {
  const locations = [
    { id: 1, location: 'San Francisco', price: 216 },
    {
      id: 2,
      location: 'Los Angeles',
      price: 213
    },
    {
      id: 3,
      location: 'New York',
      price: 159
    },
    {
      id: 4,
      location: 'Seattle',
      price: 134
    },
    {
      id: 5,
      location: 'Denver',
      price: 128
    },
    {
      id: 6,
      location: 'Washington DC',
      price: 166
    },
    {
      id: 7,
      location: 'Phoenix',
      price: 232
    },
    {
      id: 8,
      location: 'Austin',
      price: 242
    },
    { id: 9, location: 'Houston', price: 351 },
    {
      id: 10,
      location: 'New Orleans',
      price: 210
    }
  ];
  return (
    <>
      <div className='flex flex-wrap items-center justify-start w-full'>
        {locations.map(({ id, location, price }) => {
          return (
            <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
              <Location key={id} location={location} price={price} />
            </div>
          );
        })}
      </div>
    </>
  );
};
