import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

// Images
const peaceofmind = require('../../../../public/img/high/peaceofmind.jpg');

export const PeaceOfMind: React.FC<{}> = () => {
  return (
    <>
      <HostSection title='Complete peace of mind'>
        <div>
          <div className='w-full lg:flex'>
            <div className='lg:w-1/2'>
              <CharacteristicCard
                title='Stay in control'
                description='Whether you’re a few doors down or a continent away, using a hosting team can help you stay informed and list your space confidently. Your hosting team will usually be on call to provide you with information, updates, and assistance when you need it.'
                link={false}>
                <div className='w-12 h-12'>
                  <svg
                    className='h-full w-full'
                    viewBox='0 0 32 32'
                    style={{ fill: '#484848' }}>
                    <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
                  </svg>
                </div>
              </CharacteristicCard>
            </div>
            <div className='lg:w-1/2'>
              <CharacteristicCard
                title='$1,000,000 property damage protection'
                description='Airbnb’s Host Guarantee provides free protection of up to $1,000,000 USD in property damage for every booking, every time. Plus, your hosting team can usually help you handle any claims that need to be filed.'
                link="Learn more about Airbnb's Host Guarantee">
                <div className='w-12 h-12'>
                  <svg
                    className='h-full w-full'
                    viewBox='0 0 32 32'
                    style={{ fill: '#484848' }}>
                    <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
                  </svg>
                </div>
              </CharacteristicCard>
            </div>
          </div>
        </div>
        <div className='w-full md:max-w-2xl lg:max-w-5xl mx-auto py-4 md:py-16'>
          <div className='w-full md:h-96 lg:h-112'>
            <img className='h-full w-full object-cover' src={peaceofmind} />
          </div>
        </div>
      </HostSection>
    </>
  );
};
