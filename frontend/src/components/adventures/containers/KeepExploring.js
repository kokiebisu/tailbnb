import React from 'react';

// Function
import ExploringCard from '../functions/ExploringCard';

export default () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full text-3xl text-gray-750 mb-8'>
          Keep exploring in Marrakech
        </div>
        <div className='w-full flex justify-start items-start flex-wrap'>
          <ExploringCard title='Nature and outdoors' experienceNumber={193} />
          <ExploringCard title='Sports' experienceNumber={188} />
          <ExploringCard title='Art and culture' experienceNumber={144} />
          <ExploringCard title='Food and drink' experienceNumber={106} />
          <ExploringCard title='Cooking' experienceNumber={37} />
          <ExploringCard title='Entertainment' experienceNumber={15} />
        </div>
        <div className='bg-white shadow-sm rounded mr-4 border border-gray-300 mt-4'>
          <div className='px-6 py-7 mr-5'>
            <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              Show all experiences
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
