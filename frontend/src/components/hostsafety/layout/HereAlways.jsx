import * as React from 'react';

// Functions
import { CheckCard } from '../../host/functions/CheckCard';
import { HostSection } from '../../host/wrapper/HostSection';
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

const herealways = require('../../../../public/img/high/here-always.jpg');

export const HereAlways = () => {
  return (
    <HostSection title="We're here for you 24/7">
      <div className='my-16'>
        <div className='lg:h-128'>
          <img className='w-full h-full object-cover' src={herealways} />
        </div>
      </div>
      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <CharacteristicCard
            children={null}
            title='What our team can do for you'
            description='Our global team is tanding by 24/7 to support you and your guests by phone, email, and live chat.'
            link={null}
          />
        </div>
        <div className='lg:w-1/2'>
          <CheckCard description='Rebooking assistance' />
          <CheckCard description='Refunds' />
          <CheckCard description='Reimbursements' />
          <CheckCard description='Host Guarantee and insurance claims' />
          <CheckCard description='Mediation' />
        </div>
      </div>
    </HostSection>
    // <div className='w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto'>
    //   <div className='mb-4 md:mb-0 flex md:justify-center'>
    //     <div
    //       style={{ width: 70, height: 2 }}
    //       className='bg-gray-650 rounded-lg'></div>
    //   </div>
    //   <div className='flex md:justify-center mb-12 mt-2'>
    //     <h3
    //       style={{ fontFamily: 'airbnb-bold' }}
    //       className='text-gray-750 text-4xl lg:text-6xl tracking-tighter'>
    //       We're here for you 24/7
    //     </h3>
    //   </div>

    // </div>
  );
};
