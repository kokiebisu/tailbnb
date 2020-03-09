import * as React from 'react';

export const WhyHost: React.FC<{}> = () => {
  return (
    <div className='w-full md:max-w-xl lg:max-w-5xl mx-auto py-28 lg:flex'>
      <div className='w-full lg:w-1/2 md:mb-8 lg:mb-0'>
        <div className='pb-8'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl text-gray-750'>
            Why host on Airbnb?
          </h3>
        </div>
        <div className='w-90p'>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            No matter what kind of home or room you have to share, Airbnb makes
            it simple and secure to host travellers. You’re in full control of
            your availability, prices, house rules, and how you interact with
            guests.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 md:mb-8 lg:mb-0'>
        <div className='pb-8'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl text-gray-750'>
            We have your back
          </h3>
        </div>
        <div className='w-90p'>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            To keep you, your home, and your belongings safe, we cover every
            booking with $1M USD in property damage protection and another $1M
            USD in insurance against accidents.
          </p>
        </div>
      </div>
    </div>
  );
};
