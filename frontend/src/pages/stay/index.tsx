import * as React from 'react';

// Layout
import { NewFooter } from '../../components/layout/NewFooter';
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import HeaderCategory from '../../components/layout/HeaderCategory';

// Component
import { Travel } from '../../components/functions/Travel';
import TopRated from '../../components/containers/TopRated';
import { THundredPlus } from '../../components/containers/THundredPlus';

// Next
import { NextPage } from 'next';

const Stay: NextPage = () => {
  return (
    <>
      <header className='z-20 sticky bg-white top-0 md:shadow-md'>
        <ExploreHeader white={true} />
      </header>
      <HeaderCategory />
      <div className='max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400'>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-gray-650 text-sm'>
          Enter dates and number of guests to see the total price per night.
          Tourism taxes may be added
        </p>
      </div>
      <Travel />
      <TopRated />
      <THundredPlus />
      <NewFooter />
    </>
  );
};

export default Stay;
