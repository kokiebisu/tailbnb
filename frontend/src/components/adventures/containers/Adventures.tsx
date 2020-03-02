import * as React from 'react';

// Function
import AdventureCard from '../functions/AdventureCard';

export const Adventures: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center bg-gray-150'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-32'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 h-full text-5xl text-gray-750 leading-none flex items-center'>
          <h3>Airbnb Adventures</h3>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 px-4 text-gray-750 flex'>
          <AdventureCard
            icon='camp'
            title='Meals and stays included'
            description='Every adventure is fully planned, from activities to accommodations.'
          />
          <AdventureCard
            icon='map'
            title='Led by locals'
            description='Adventures are hosted by local insiders who immerse you in their culture.'
          />
          <AdventureCard
            icon='campcar'
            title='One-of-a-kind access'
            description="Explore places and communities you can\'t easily access on your own."
          />
        </div>
      </div>
    </div>
  );
};
