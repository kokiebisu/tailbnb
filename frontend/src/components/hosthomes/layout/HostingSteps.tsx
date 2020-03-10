import * as React from 'react';

// Functions
import { HostingStepsCard } from '../functions/HostingStepsCard';

// Images
const quote = require('../../../../public/img/high/host-steps-quote.jpg');

export const HostingSteps: React.FC<{}> = () => {
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
      <div className='w-full px-6 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16 flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2 relative'>
          <div id='quote__steps'>
            <p
              style={{
                fontFamily: 'circular-std-medium'
              }}
              className='text-6xl md:text-7xl lg:text-10xl text-yellow-850'>
              “
            </p>
          </div>
          <div className='mt-12'>
            <div className='md:w-85p'>
              <p
                id='quote-description'
                style={{
                  fontFamily:
                    'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                }}
                className='md:text-lg md:leading-relaxed lg:text-4xl text-gray-750 lg:leading-tight'>
                The Host Guarantee helped me decide to join Airbnb because I
                have it to fall back on if there's damage or problems.
              </p>
            </div>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm md:text-base text-gray-650 my-4'>
              Olivia hosts in Paris for the flexibility it provides
            </p>
          </div>
          <button>
            <div className='py-3 px-5 border-2 border-gray-850 rounded'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-gray-850'>
                Learn how they host
              </p>
            </div>
          </button>
        </div>
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={quote} />
        </div>
      </div>
    </>
  );
};
