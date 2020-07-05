import * as React from 'react';

// Wrappers
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

export const GetStarted: React.FC<{}> = () => {
  return (
    <HostSection title='How to get started'>
      <div>
        <div className='w-full lg:flex'>
          <div className='lg:w-1/3'>
            <CharacteristicCard
              title='Get connected'
              description='Tell us a little about your needs and we’ll see if we can match you with a hosting team in your area. Then your local team will reach out to gather info about your space, determine the right plan for you, and go over pricing.'
              link={null}>
              <div className='w-12 h-12'>
                <img
                  className='w-full h-full'
                  src='https://a0.muscache.com/pictures/b611b345-a32a-48af-a3db-13ac0ad47d95.jpg'
                />
              </div>
            </CharacteristicCard>
          </div>
          <div className='lg:w-1/3'>
            <CharacteristicCard
              title='Let a specialist do the work'
              description='Your dedicated hosting team will usually take care of everything—from creating your listing to communicating with guests and ensuring that your place is cleaned between rentals.'
              link={null}>
              <div className='w-16 h-12'>
                <img
                  className='w-full h-full'
                  src='https://a0.muscache.com/pictures/7834e234-3a9f-46a6-8e22-f521312f715f.jpg'
                />
              </div>
            </CharacteristicCard>
          </div>

          <div className='w-1/3'>
            <CharacteristicCard
              title='Start earning money'
              description='With the hosting logistics taken care of, all that’s left is to collect the earnings from your space. Talk to your hosting team about easy payout options.'
              link={null}>
              <div className='w-12 h-12'>
                <img
                  className='w-full h-full'
                  src='https://a0.muscache.com/pictures/0fca42d5-7287-449d-9c24-2f76864ee5d2.jpg'
                />
              </div>
            </CharacteristicCard>
          </div>
        </div>
      </div>
    </HostSection>
  );
};
