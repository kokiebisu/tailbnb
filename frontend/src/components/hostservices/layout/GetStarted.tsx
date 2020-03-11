import * as React from 'react';

// Functions
import { GetStartedCard } from '../functions/GetStartedCard';

export const GetStarted: React.FC<{}> = () => {
  return (
    <>
      <div className='w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16'>
        <div className='my-8'>
          <div className='mb-4 md:mb-0 flex md:justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex md:justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-4xl lg:text-6xl tracking-tight'>
              How to get started
            </h3>
          </div>
          <div>
            <div className='w-full lg:flex'>
              <GetStartedCard
                icon='connected'
                title='Get connected'
                description='Tell us a little about your needs and we’ll see if we can match you with a hosting team in your area. Then your local team will reach out to gather info about your space, determine the right plan for you, and go over pricing.'
                last={false}
              />
              <GetStartedCard
                icon='handshake'
                title='Let a specialist do the work'
                description='Your dedicated hosting team will usually take care of everything—from creating your listing to communicating with guests and ensuring that your place is cleaned between rentals.'
                last={false}
              />
              <GetStartedCard
                icon='money'
                title='Start earning money'
                description='With the hosting logistics taken care of, all that’s left is to collect the earnings from your space. Talk to your hosting team about easy payout options.'
                last={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
