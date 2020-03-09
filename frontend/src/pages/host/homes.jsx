import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';

const background = require('../../../public/img/high/hosthome.jpg');

const quote = require('../../../public/img/high/host-quote.jpg');

const homes = () => {
  return (
    <div>
      <HostHomesHeader />
      <div className='w-full max-w-layout mx-auto relative'>
        <div>
          <img
            src={background}
            style={{
              maxHeight: '60rem'
            }}
            className='w-full relative object-cover h-144'
          />
        </div>
        <HostHomesCard />
        <WhyHost />
        <HostingSteps />
        <div className='w-full max-w-5xl mx-auto py-8 flex'>
          <div className='w-1/2 relative'>
            <div className='absolute' style={{ top: -40 }}>
              <p
                style={{
                  fontFamily: 'circular-std-medium'
                }}
                className='text-10xl text-yellow-850'>
                “
              </p>
            </div>
            <div className='mt-12'>
              <div className='w-85p'>
                <p
                  style={{
                    fontFamily:
                      'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                  }}
                  className='text-4xl text-gray-750 leading-tight'>
                  The Host Guarantee helped me decide to join Airbnb because I
                  have it to fall back on if there's damage or problems.
                </p>
              </div>
            </div>
            <div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-650 my-4'>
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
          <div className='w-1/2'>
            <img className='h-full w-full' src={quote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default homes;
