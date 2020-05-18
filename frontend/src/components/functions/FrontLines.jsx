import React from 'react';

export const FrontLines = () => {
  return (
    <div className='border-t border-b border-gray-300 xl:border-none py-6 md:py-12 px-6 md:px-10 xl:px-32 xl:max-w-12xl'>
      <div className='md:pb-12 lg:flex xl:border-b border-gray-300'>
        <div className='lg:w-1/2 mb-2 md:mb-6'>
          <div className='md:w-55p'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='md:text-gray-750 text-2xl md:text-3xl xl:text-3xl tracking-tight leading-9'>
              Host a hero: help us house front line responders around the world
            </h3>
            <div className='mt-6'>
              <button
                style={{ fontFamily: 'airbnb-medium' }}
                className='border-gray-850 border px-4 py-1 rounded-lg text-gray-750 text-sm'>
                Get involved
              </button>
            </div>
          </div>
        </div>
        <div className='md:w-4/5 lg:w-1/2 mt-2'>
          <div className=''>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm md:text-lg text-gray-750'>
              With front line stays, Airbnb is partnering with our hosts to
              connect 100,000 healthcare providers, relief workers, and first
              responders with places to stay that allow them to be close to
              their patients and safely distanced from their own families.
            </p>
          </div>
          <div className='my-6'>
            <a
              style={{ fontFamily: 'airbnb-medium' }}
              className='underline text-sm md:text-lg text-gray-850'
              href=''>
              Host or donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
