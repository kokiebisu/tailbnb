import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

// Layout
import { QuoteLeft } from '../../host/layout/QuoteLeft';

// Images
// const quote = require('../../../../public/img/high/host-steps-quote.jpg');

export const HostingSteps: React.FC<{}> = () => {
  return (
    <>
      <HostSection title='Hosting in 3 steps'>
        <div className='w-full lg:flex'>
          <CharacteristicCard
            title='List your space for free'
            description='Share any space without sign-up charges, from a shared living room to a second home and everything in-between.'
            link={null}>
            <div className='h-12 w-12'>
              <svg
                className='h-full w-full'
                viewBox='0 0 32 32'
                style={{ fill: '#484848' }}>
                <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
              </svg>
            </div>
          </CharacteristicCard>
          <CharacteristicCard
            title='Decide how you want to host'
            description="Choose your own schedule, prices, and requirements for guests. We're there to help along the way."
            link={null}>
            <div className='h-12 w-12'>
              <svg
                className='h-full w-full'
                viewBox='0 0 32 32'
                style={{ fill: '#484848' }}>
                <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
              </svg>
            </div>
          </CharacteristicCard>
          <CharacteristicCard
            title='Welcome your first guest'
            description='Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay.'
            link='Learn how to start hosting'>
            <div className='h-12 w-12'>
              <svg
                className='h-full w-full'
                viewBox='0 0 32 32'
                style={{ fill: '#484848' }}>
                <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
              </svg>
            </div>
          </CharacteristicCard>
        </div>
        <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16'>
          <QuoteLeft />
        </div>
      </HostSection>
    </>
  );
};
