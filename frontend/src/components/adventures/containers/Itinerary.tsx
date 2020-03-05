import * as React from 'react';

// Functions
import { ItineraryCard } from '../functions/ItineraryCard';

export const Itinerary: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl flex justify-start items-start flex-wrap py-8 md:py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='mb-16 w-full md:w-4/12 md:h-full'>
          <p className='lg:sticky lg:top-0 text-2xl md:text-3xl text-gray-750'>
            {' '}
            Your itinerary
          </p>
        </div>
        <div className='w-full md:w-8/12'>
          <ItineraryCard
            is_last={false}
            day={1}
            title='Meeting at 6pm'
            description='Pick up is at 6pm (18:00) from the main entrance of Clarion Hotel The Edge.'
          />
          <ItineraryCard
            is_last={true}
            day={2}
            title='Hiking (summer), Snowshoeing (winter)'
            description='After the breakfast, we will do hiking in surrounding nature'
          />
        </div>
      </div>
    </div>
  );
};
