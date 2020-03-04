import * as React from 'react';

// Function
import { AdventureCard } from '../functions/AdventureCard';

export const Adventures: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center bg-gray-150'>
      <div className='px-4 md:px-16 max-w-6xl xl:px-0 w-full flex justify-center'>
        <div className='w-full lg:max-w-6xl md:flex justify-start items-start flex-wrap md:py-16 lg:py-32'>
          <div className='py-12 md:py-0 md:flex justify-center items-start'>
            <div className='pb-8 md:w-4/12 w-full md:pt-0 border-b border-gray-300 md:border-none'>
              <div
                style={{ fontFamily: 'airbnb-bold' }}
                className='md:w-4/12 h-full flex md:items-start lg:items-center'>
                <h3 className='text-3xl lg:text-5xl text-gray-750 leading-tight '>
                  Airbnb Adventures
                </h3>
              </div>
            </div>

            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full md:w-8/12 text-gray-750 lg:flex'>
              <AdventureCard
                position='first'
                icon='camp'
                title='Meals and stays included'
                description='Every adventure is fully planned, from activities to accommodations.'
              />
              <AdventureCard
                position='middle'
                icon='map'
                title='Led by locals'
                description='Adventures are hosted by local insiders who immerse you in their culture.'
              />
              <AdventureCard
                position='last'
                icon='campcar'
                title='One-of-a-kind access'
                description="Explore places and communities you can\'t easily access on your own."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
