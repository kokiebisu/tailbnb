import * as React from 'react';

export const TravellerTrips = () => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto flex justify-center border-t border-b border-gray-300 mb-32'>
      <div className='pt-12 pb-6 md:pt-24 md:pb-24 flex flex-col md:items-center'>
        <div className='md:w-70p lg:w-75p'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl md:text-3xl text-gray-750 md:text-center leading-8'>
            Travellers took 49 million trips with Airbnb in 2017. Only 1 in
            25,000 resulted in a significant property damage claim.
          </h3>
        </div>
      </div>
    </div>
  );
};
