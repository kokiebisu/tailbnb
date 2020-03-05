import * as React from 'react';

// Functions
import AvailabilityCard from '../functions/AvailabilityCard';

export const Availability: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-2xl w-full md:text-3xl text-gray-750 mb-8'>
          Availability
        </div>
        <div className='w-full overflow-y-hidden'>
          <div className='w-full h-full overflow-y-hidden'>
            <div className='w-full h-full scroller'>
              <div className='w-full scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl md:w-full'>
                <div className='mr-1'>
                  <AvailabilityCard />
                </div>
                <div className='mr-1'>
                  <AvailabilityCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='border-2 border-green-850 rounded mt-24'>
          <div className='py-2 px-4'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-green-850'>
              Show more availability
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
