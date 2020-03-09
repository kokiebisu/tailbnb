import * as React from 'react';

// Functions
import { CoveredCard } from '../functions/CoveredCard';

// Images
const covered = require('../../../../public/img/high/host-covered.jpg');

export const Covered: React.FC<{}> = () => {
  return (
    <>
      <div className='w-full max-w-5xl mx-auto pt-8 pb-16'>
        <div className='py-8'>
          <div className='flex justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-850 text-6xl tracking-tight'>
              We've got you covered
            </h3>
          </div>
          <div className='flex'>
            <div
              className='w-1/2 flex items-center'
              style={{ fontFamily: 'airbnb-book' }}>
              <div className='w-85p'>
                <div>
                  <p className='text-gray-750 leading-relaxed'>
                    We know it’s a priority to trust the people staying in your
                    home. Airbnb allows you to set strict requirements for who
                    can book and to get to know guests before their stay. If
                    something does come up, though, we have your back. With our
                    Host Guarantee covering property damage and our Host
                    Protection Insurance for liability, you’re supported as a
                    host throughout.
                  </p>
                </div>
                <div className='mt-4'>
                  <a className='text-green-850' href=''>
                    Learn how Airbnb protects hosts
                  </a>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <CoveredCard description='Ability to require government ID before booking' />
              <CoveredCard description='House Rules guests must agree to' />
              <CoveredCard description='Chance to read reviews from past trips' />
              <CoveredCard description='Free $1M USD protection for property damage' />
              <CoveredCard description='Free $1 Million US liability insurance' />
              <CoveredCard description='24/7 global customer support' />
            </div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto py-16'>
          <div className='w-full'>
            <img className='h-full w-full' src={covered} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
