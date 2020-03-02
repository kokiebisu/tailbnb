import * as React from 'react';

// Wrapper
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { Experiences } from '../../components/containers/Experiences';
import { Hosts } from '../../components/containers/Hosts';

// Next
import { NextPage } from 'next';

const Experience: NextPage<{}> = () => {
  return (
    <>
      <ExploreHeader mode='white' type='Experiences' />
      <div className='text-gray-750 md:px-0 max-w-90% xl:px-0 mx-auto py-5'>
        <p style={{ fontFamily: 'airbnb-bold' }} className='text-xs'>
          AIRBNB EXPERIENCES
        </p>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-750 md:w-5/6 text-4xl'>
          One-of-a-kind activities hosted by locals
        </h3>
      </div>
      <Experiences />
      <Hosts />
    </>
  );
};

export default Experience;
