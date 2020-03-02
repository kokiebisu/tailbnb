import React from 'react';

export default () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
          What you'll do
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 px-4 text-gray-750 text-lg '>
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
