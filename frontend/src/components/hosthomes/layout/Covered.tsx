import * as React from 'react';

// Wrappers
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';
import { CheckCard } from '../../host/functions/CheckCard';

export const Covered: React.FC<{}> = () => {
  return (
    <>
      <HostSection title="We've got you covered">
        <div className='lg:flex items-center'>
          <div className='lg:w-1/2 flex items-center lg:mb-0 mb-8'>
            <CharacteristicCard
              title={null}
              description='We know it’s a priority to trust the people staying in your home. Airbnb allows you to set strict requirements for who can book and to get to know guests before their stay. If something does come up, though, we have your back. With our Host Guarantee covering property damage and our Host Protection Insurance for liability, you’re supported as a host throughout.'
              link='Learn how Airbnb protects hosts'
              children={null}
            />
          </div>
          <div className='lg:w-1/2'>
            <CheckCard description='Ability to require government ID before booking' />
            <CheckCard description='House Rules guests must agree to' />
            <CheckCard description='Chance to read reviews from past trips' />
            <CheckCard description='Free $1M USD protection for property damage' />
            <CheckCard description='Free $1 Million US liability insurance' />
            <CheckCard description='24/7 global customer support' />
          </div>
        </div>
      </HostSection>
    </>
  );
};
