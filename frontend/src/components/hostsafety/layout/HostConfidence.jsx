import * as React from 'react';

// Functions
import { HostConfidenceCard } from '../functions/HostConfidenceCard';
import { HostConfidenceCheckCard } from '../functions/HostConfidenceCheckCard';

export const HostConfidence = () => {
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
          Host with confidence
        </h3>
      </div>
      <div className='lg:flex lg:mt-20'>
        <HostConfidenceCard
          icon='protection'
          title='$1,000,000 property damage protection'
          description='In the rare case of property damage, Airbnb’s Host Guarantee provides free protection of up to $1,000,000 USD in property damage for every booking, every time. Claims can be filed directly through our Resolution Centre.'
          link="Learn more about Airbnb's Host Guarantee"
        />
        <HostConfidenceCard
          icon='insurance'
          title='Insurance against accidents'
          description='Airbnb provides free Host Protection Insurance covering liability claims up to $1,000,000 USD. This insurance is for the unlikely event that someone files a lawsuit or claim against you for bodily injury or property damage that occurs in a listing, or on an Airbnb property, during a stay.'
          link='Learn more about Host Protection Insurance'
        />
      </div>
      <div className='lg:flex mt-12 mb-32'>
        <HostConfidenceCheckCard title='Completely free coverage' />
        <HostConfidenceCheckCard title='Automatically applies to every reservation' />
        <HostConfidenceCheckCard title='Claims can be filed directly through Airbnb' />
      </div>
    </div>
  );
};
