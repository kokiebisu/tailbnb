import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { StatsCard } from '../../host/functions/StatsCard';

export const Worldwide: React.FC<{}> = () => {
  return (
    <HostSection title='Hosts like you, worldwide'>
      <div className='md:flex'>
        <StatsCard title='2.9M' description='Hosts on Airbnb' />
        <StatsCard title='800K' description='Average Airbnb stays each night' />
        <StatsCard title='14K' description='New hosts per month' />
      </div>
    </HostSection>
  );
};
