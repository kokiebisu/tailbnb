import React from 'react';

// Components
import ExploreCard from './ExploreCard';

// Images
import explore1 from '../../public/img/explore-1.jpg';
import explore2 from '../../public/img/explore-2.jpg';
import explore3 from '../../public/img/explore-3.jpg';

export default () => {
  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
            <div className='w-32 sm:w-1/3 mr-2 cursor-pointer'>
              <ExploreCard img={explore1} title='Stays' />
            </div>
            <div className='w-32 sm:w-1/3 mr-2 cursor-pointer'>
              <ExploreCard img={explore2} title='Experiences' />
            </div>
            <div className='w-32 sm:w-1/3 mr-2 cursor-pointer'>
              <ExploreCard img={explore3} title='Adventures' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
