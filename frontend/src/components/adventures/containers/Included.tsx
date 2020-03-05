import * as React from 'react';

// Function
import IncludedCard from '../functions/IncludedCard';

export const Included: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 md:h-full text-2xl md:text-3xl text-gray-750 pb-8 md:pb-0'>
          What's included
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 md:px-4 text-gray-750 flex overflow-x-hidden overflow-y-hidden md:overflow-x-visible md:overflow-y-vidi
          '>
          <div className='overflow-y-hidden'>
            <div className='w-full h-full overflow-y-hidden'>
              <div className='h-full scroller'>
                <div className='scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-104 w-full md:w-full'>
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
      </div>
    </div>
  );
};
