import * as React from 'react';

// Function
import { IncludedCard } from '../functions/IncludedCard';

export const Included: React.FC<{}> = () => {
  return (
    <div className='px-6 md:px-16 lg:px-0 xl:max-w-6xl mx-auto py-5 lg:py-16 lg:flex'>
      <div className='lg:sticky lg:top-0 py-8 md:py-0 md:w-4/12 h-full'>
        <div style={{ fontFamily: 'airbnb-bold' }} className='md:h-full'>
          <p className=' text-2xl md:text-3xl text-gray-750'>What's included</p>
        </div>
      </div>
      <div className='overflow-y-hidden md:w-8/12'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
              <div className='mr-4'>
                <IncludedCard />
              </div>
              <div className='mr-4'>
                <IncludedCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
