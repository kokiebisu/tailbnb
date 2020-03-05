import * as React from 'react';

// Functions
import ItineraryCard from '../functions/ItineraryCard';

// // Images
// const detail2 = require('../../../../public/img/high/staydetail2.jpg');

export const Itinerary: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='mb-16 text-2xl w-full md:w-4/12 md:h-full md:text-3xl text-gray-750'>
          Your itinerary
        </div>
        <div className='w-full md:w-8/12'>
          <ItineraryCard
            is_last='false'
            day={1}
            title='Meeting at 6pm'
            description='Pick up is at 6pm (18:00) from the main entrance of Clarion Hotel The Edge.'
          />
          <ItineraryCard
            is_last='true'
            day={2}
            title='Hiking (summer), Snowshoeing (winter)'
            description='After the breakfast, we will do hiking in surrounding nature'
          />
        </div>
      </div>
    </div>
  );
};
