import React from 'react';

// Wrapper
import Section from '../components/Section';
import SectionOverflow from '../components/SectionOverflow';
import ExploreHeader from '../components/ExploreHeader';
import ExploreSection from '../components/ExploreSection';
import ExploreSectionOverflow from '../components/ExploreSectionOverflow';
import Experiences from '../components/Experiences';
import Hosts from '../components/Hosts';

export default () => {
  return (
    <>
      <ExploreHeader type='Experiences' />
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
      <ExploreSectionOverflow>
        <Experiences />
      </ExploreSectionOverflow>
      <ExploreSection title='Meet hosts around the world'>
        <Hosts />
      </ExploreSection>
    </>
  );
};
