import * as React from 'react';

export const WhatYouDo: React.FC<{}> = () => {
  return (
    // <div className='lg:w-5/12 lg:h-121r'>
    // <div className='shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10'>

    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl xl:px-0 md:flex justify-start items-start flex-wrap py-8 md:py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='md:w-4/12 md:h-full '>
          <p className='w-2/3 text-2xl mb-12 md:mb-0 md:text-3xl text-gray-750'>
            What you'll do
          </p>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 text-gray-750 text-lg '>
          <p className='mb-7'>
            Leave early from Marrakech and head to the Tinzert & Ouirgane for a
            2 days Trek the village is Tucked in the mystical and peaceful
            foothills of the High Atlas Mountains, in the heart of the majestic
            Toubkal National Park lays the picturesque village of Ouirgane.
          </p>
          <p className='mb-7'>
            Spectacular views of the Toubkal mountain range await all trekkers
            who take the time to discover this magical land. Be welcomed by the
            Berber locals and discover true Moroccan hospitality as you step
            into a world not your own. Perfect for individuals and families
            alike this trek will be sure to delight the senses and cultivate
            unforgettable moments and memories.
          </p>
          <p className='mb-7'>
            During the two days trek you will get the chance to learn howto cook
            certain dishes in addition to tea making ceremony
          </p>
        </div>
      </div>
    </div>
  );
};
