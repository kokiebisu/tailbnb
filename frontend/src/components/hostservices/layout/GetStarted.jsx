import * as React from 'react';

// Functions
// import { HostingStepsCard } from '../functions/HostingStepsCard';

// Images
const quote = require('../../../../public/img/high/host-steps-quote.jpg');

export const HostingSteps = () => {
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
              Hosting in 3 steps
            </h3>
          </div>
          <div>
            <div className='w-full lg:flex'>
              <HostingStepsCard
                title='List your space for free'
                description='Share any space without sign-up charges, from a shared living room to a second home and everything in-between.'
                link={false}
                last={false}
              />
              <HostingStepsCard
                title='Decide how you want to host'
                description="Choose your own schedule, prices, and requirements for guests. We're there to help along the way."
                link={false}
                last={false}
              />
              <HostingStepsCard
                title='Welcome your first guest'
                description='Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay.'
                link={true}
                last={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
