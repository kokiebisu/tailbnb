import * as React from 'react';

// Functions
import { HereAlwaysCheck } from '../functions/HereAlwaysCheck';

const herealways = require('../../../../public/img/high/here-always.jpg');

export const HereAlways = () => {
  return (
    <div className='w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto'>
      <div className='mb-4 md:mb-0 flex md:justify-center'>
        <div
          style={{ width: 70, height: 2 }}
          className='bg-gray-650 rounded-lg'></div>
      </div>
      <div className='flex md:justify-center mb-12 mt-2'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-750 text-4xl lg:text-6xl tracking-tighter'>
          We're here for you 24/7
        </h3>
      </div>
      <div className='my-16'>
        <div className='lg:h-128'>
          <img className='w-full h-full object-cover' src={herealways} />
        </div>
      </div>
      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <div className='lg:w-95p'>
            <div className='mt-3 mb-5'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-2xl text-gray-750'>
                What our team can do for you
              </h3>
            </div>
            <div className='lg:w-80p '>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750'>
                Our global team is tanding by 24/7 to support you and your
                guests by phone, email, and live chat.
              </p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 mb-28 md:mt-12 md:mt-0'>
          <div className='lg:w-90p'>
            <HereAlwaysCheck title='Rebooking assistance' />
            <HereAlwaysCheck title='Refunds' />
            <HereAlwaysCheck title='Reimbursements' />
            <HereAlwaysCheck title='Host Guarantee and insurance claims' />
            <HereAlwaysCheck title='Mediation' />
          </div>
        </div>
      </div>
    </div>
  );
};
