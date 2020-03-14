import * as React from 'react';

// Functions
// import { CoveredCard } from '../functions/CoveredCard';
import { HostSection } from '../../host/wrapper/HostSection';
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';
import { CheckCard } from '../../host/functions/CheckCard';
// Images
// const covered = require('../../../../public/img/high/host-covered.jpg');

export const Covered = () => {
  return (
    <>
      <HostSection title="We've got you covered">
        <div className='flex items-center'>
          <div className='w-1/2 flex items-center'>
            <CharacteristicCard
              title={null}
              description='We know it’s a priority to trust the people staying in your home. Airbnb allows you to set strict requirements for who can book and to get to know guests before their stay. If something does come up, though, we have your back. With our Host Guarantee covering property damage and our Host Protection Insurance for liability, you’re supported as a host throughout.'
              link='Learn how Airbnb protects hosts'
              children={null}
            />
          </div>
          <div className='w-1/2'>
            <CheckCard description='Ability to require government ID before booking' />
            <CheckCard description='House Rules guests must agree to' />
            <CheckCard description='Chance to read reviews from past trips' />
            <CheckCard description='Free $1M USD protection for property damage' />
            <CheckCard description='Free $1 Million US liability insurance' />
            <CheckCard description='24/7 global customer support' />
          </div>
        </div>
      </HostSection>
      {/* <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto pt-4 pb-4 md:pb-16 md:pt-8'>
        <div className='my-8'>
          <div className='mb-4 md:mb-0 flex md:justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex md:justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-4xl lg:text-6xl tracking-tight leading-9'>
              We've got you covered
            </h3>
          </div>
          <div className='lg:flex'>
            <div
              className='md:w-full lg:w-1/2 flex items-center'
              style={{ fontFamily: 'airbnb-book' }}>
              <div className='lg:w-85p'>
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
                <div className='mb-8 lg:mb-0 mt-4'>
                  <a className='text-green-850' href=''>
                    Learn how Airbnb protects hosts
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-full lg:w-1/2'>
              <CoveredCard description='Ability to require government ID before booking' />
              <CoveredCard description='House Rules guests must agree to' />
              <CoveredCard description='Chance to read reviews from past trips' />
              <CoveredCard description='Free $1M USD protection for property damage' />
              <CoveredCard description='Free $1 Million US liability insurance' />
              <CoveredCard description='24/7 global customer support' />
            </div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto py-4 md:py-16'>
          <div className='w-full'>
            <img className='h-full w-full' src={covered} alt='' />
          </div>
        </div>
      </div> */}
    </>
  );
};
