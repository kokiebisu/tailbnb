import * as React from 'react';

// Functions
import { WorldwideCard } from '../functions/WorldwideCard';

export const Worldwide: React.FC<{}> = () => {
  return (
    <div className='w-full md:max-w-xl lg:max-w-5xl mx-auto pt-8 py-32'>
      <div className='flex justify-center'>
        <div
          style={{ width: 70, height: 2 }}
          className='bg-gray-650 rounded-lg'></div>
      </div>

      <div className='flex justify-center mb-12 mt-2'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-850 md:text-4xl lg:text-6xl tracking-tight'>
          Hosts like you, worldwide
        </h3>
      </div>
      <div className='flex'>
        <WorldwideCard title='2.9M' description='Hosts on Airbnb' />
        <WorldwideCard
          title='800K'
          description='Average Airbnb stays each night'
        />
        <WorldwideCard title='14K' description='New hosts per month' />
      </div>
    </div>
  );
};
