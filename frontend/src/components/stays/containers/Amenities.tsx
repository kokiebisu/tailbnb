import * as React from 'react';

// Wrapper
import { DetailSection } from '../../wrapper/DetailSection';

// Function
import { AmenityCard } from '../functions/AmenityCard';

export const Amenities: React.FC<{}> = () => {
  return (
    <DetailSection title='Amenities'>
      <div className='flex items-start justify-start flex-wrap'>
        <AmenityCard type='wifi' title='Wifi' />
        <AmenityCard type='laptop' title='Laptop-friendly workspace' />
        <AmenityCard type='kitchen' title='Kitchen' />
        <AmenityCard type='iron' title='Iron' />
      </div>
      <div className='mt-10 mb-8'>
        <a
          style={{ fontFamily: 'airbnb-medium' }}
          className='py-3 px-6 rounded-xl border border-black '>
          Show all 32 amenities
        </a>
      </div>
    </DetailSection>
  );
};
