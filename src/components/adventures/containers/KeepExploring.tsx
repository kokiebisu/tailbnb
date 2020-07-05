import * as React from 'react';

// Function
import { ExploringCard } from '../functions/ExploringCard';

export const KeepExploring: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full mx-auto max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-2xl w-full md:text-3xl text-gray-750 mb-8'>
          Keep exploring in Marrakech
        </div>
        <div className='w-full flex justify-start items-start flex-wrap'>
          <ExploringCard title='Nature and outdoors' experienceNumber={193} />
          <ExploringCard title='Sports' experienceNumber={188} />
          <ExploringCard title='Art and culture' experienceNumber={144} />
          <ExploringCard title='Food and drink' experienceNumber={106} />
          <ExploringCard title='Cooking' experienceNumber={37} />
          <ExploringCard title='Entertainment' experienceNumber={15} />
          <div className='bg-white shadow-sm rounded mr-4 border border-gray-300 mt-4'>
            <div className='px-6 py-7 mr-5'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-gray-750'>
                Show all experiences
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
