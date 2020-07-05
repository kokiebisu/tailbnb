import * as React from 'react';

// Functions
import { MoreHostingCard } from '../functions/MoreHostingCard';

// Images
const setup = require('../../../../public/img/high/hosting-setup.jpg');
const safety = require('../../../../public/img/high/hosting-safety.jpg');
const financials = require('../../../../public/img/high/hosting-financials.jpg');

export const MoreHosting: React.FC<{}> = () => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto pt-8 pb-12 md:pt-0 pb-0 md:py-8'>
      <div className='mb-4 md:mb-3'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-2xl text-gray-750'>
          More about hosting
        </h3>
      </div>
      <div className='md:flex'>
        <MoreHostingCard
          img={setup}
          title='Setup'
          description='How to start hosting'
          last={false}
        />
        <MoreHostingCard
          img={safety}
          title='Safety'
          description='How Airbnb protects hosts'
          last={false}
        />
        <MoreHostingCard
          img={financials}
          title='Financials'
          description='How you make money on Airbnb'
          last={true}
        />
      </div>
    </div>
  );
};
