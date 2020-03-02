import React from 'react';

// Function
import KeepInMindCard from '../functions/KeepInMindCard';

export default () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
          Things to keep in mind
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 px-4 text-gray-750'>
          <KeepInMindCard
            order='top'
            title='Cancellation policy'
            description='Any experience can be cancelled and fully refunded within 24 hours of
          purchase.'
          />
          <KeepInMindCard
            title='Communication policy'
            description='Always communicate through Airbnb. To protect your payment, never transfer money or communicate outside of the Airbnb website or app.'
          />
          <KeepInMindCard
            order='bottom'
            title='Guest requirements'
            description='Up to 6 guests ages 18 and up can attend. Parents may also bring children under 2 years of age.

              The activity level for this adventure is moderate.'
          />
        </div>
      </div>
    </div>
  );
};
