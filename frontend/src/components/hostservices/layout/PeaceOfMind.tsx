import * as React from 'react';

// Functions
import { PeaceOfMindCard } from '../functions/PeaceOfMindCard';

// Images
const peaceofmind = require('../../../../public/img/high/peaceofmind.jpg');

export const PeaceOfMind: React.FC<{}> = () => {
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
              Complete peace of mind
            </h3>
          </div>
          <div>
            <div className='w-full lg:flex'>
              <PeaceOfMindCard
                title='Stay in control'
                description='Whether you’re a few doors down or a continent away, using a hosting team can help you stay informed and list your space confidently. Your hosting team will usually be on call to provide you with information, updates, and assistance when you need it.'
                link={false}
                last={false}
              />
              <PeaceOfMindCard
                title='$1,000,000 property damage protection'
                description='Airbnb’s Host Guarantee provides free protection of up to $1,000,000 USD in property damage for every booking, every time. Plus, your hosting team can usually help you handle any claims that need to be filed.'
                link={true}
                last={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-5xl mx-auto py-4 md:py-16'>
        <div className='w-full lg:h-112'>
          <img
            className='h-full w-full object-cover'
            src={peaceofmind}
            alt=''
          />
        </div>
      </div>
    </>
  );
};
