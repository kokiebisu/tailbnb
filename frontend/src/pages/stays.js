import React from 'react';

// Wrapper
import { Section } from '../components/wrapper/Section';
import SectionOverflow from '../components/wrapper/SectionOverflow';
import StaySection from '../components/wrapper/ExploreSection';
import StaySectionOverflow from '../components/wrapper/ExploreSectionOverflow';
import { Footer } from '../components/layout/Footer';
import { ExploreHeader } from '../components/layout/ExploreHeader';

// Component
import { Travel } from '../components/containers/Travel';
import { TopRated } from '../components/containers/TopRated';
import { THundredPlus } from '../components/containers/THundredPlus';

export default () => {
  return (
    <>
      <header className='z-20 sticky bg-white top-0 '>
        <ExploreHeader type='Stays' />
        <div className='px-5 md:px-0 mx-auto py-2 border-b border-gray-200'>
          <div className='mx-auto md:max-w-90% flex flex-wrap items-center justify-start'>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Dates
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Guests
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Filters
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Work trip
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Type of place
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Price
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              Instant Book
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full'>
              More filters
            </div>
          </div>
        </div>
      </header>
      <div className='max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400'>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-gray-650 text-sm'>
          Enter dates and number of guests to see the total price per night.
          Tourism taxes may be added
        </p>
      </div>
      <StaySectionOverflow title='Travel the world with Airbnb'>
        <Travel />
      </StaySectionOverflow>
      <StaySection
        title='Top-rated places to stay'
        phrase='Explore some of the best-reviewed stays in the world'>
        <TopRated />
      </StaySection>
      <StaySection title='300+ places to stay'>
        <THundredPlus />
      </StaySection>
      <Footer />
    </>
  );
};
