import * as React from 'react';

// Layout
import { NewFooter } from '../../components/layout/NewFooter';
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { HeaderCategory } from '../../components/layout/HeaderCategory';
import { MovePage } from '../../components/layout/MovePage';

// Component
import { Travel } from '../../components/functions/Travel';
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
      <THundredPlus />
      <div className='my-24'>
        <MovePage
          category='stay'
          page={1}
          previousPage={0}
          nextPage={1}
          first={true}
          last={false}
        />
      </div>
      <NewFooter />
    </>
  );
};

export default Stay;
