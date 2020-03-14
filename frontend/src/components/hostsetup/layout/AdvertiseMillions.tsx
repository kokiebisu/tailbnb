import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

// Images
const advertisemillions = require('../../../../public/img/high/advertise-millions.jpg');

export const AdvertiseMillions: React.FC<{}> = () => {
  return (
    <>
      <HostSection title='Advertise to millions'>
        <div className='w-full md:h-104 lg:h-112'>
          <img src={advertisemillions} className='w-full h-full' />
        </div>
        <div className='mt-16'>
          <div className='flex flex-col lg:flex-row'>
            <CharacteristicCard
              children={null}
              title='Guidance to get you set up'
              description=' As you’re creating your listing, we’ll ask you the questions that
            guests want to know about when booking. You’ll describe your home,
            providing details like what’s special about the space, including any
            quirks they can expect.'
              link={null}
            />
            <CharacteristicCard
              children={null}
              title='Tips along the way'
              description='If you’re having any trouble getting booked, we’ll provide you with advice on prices, settings, and other updates that can help you get reservations faster. And experienced hosts in our Community Centre can pitch in, too.'
              link={null}
            />
            <CharacteristicCard
              children={null}
              title='Millions of global guests'
              description='Once you’ve completed your listing, guests from all over can find your home in search results. There are nearly 2 million Airbnb guests each night and we have tools to help you get reservations that work for you.'
              link='Learn how Airbnb helps you get great guests'
            />
          </div>
        </div>
      </HostSection>
    </>
  );
};
