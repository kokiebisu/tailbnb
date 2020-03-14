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
        <div className='mb-16 lg:mb-0'>
          <div className='lg:w-1/2'>
            <CharacteristicCard
              children={null}
              title='What our team can do for you'
              description='Our global team is tanding by 24/7 to support you and your guests by phone, email, and live chat.'
              link={null}
            />
          </div>
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
  );
};
