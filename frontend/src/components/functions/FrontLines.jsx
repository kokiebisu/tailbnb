import React from 'react';

export const FrontLines = () => {
  return (
    <div className='border-t border-b border-gray-300 xl:border-none py-6 md:py-12 px-6 md:px-10 xl:px-32 xl:max-w-12xl'>
      <div className='md:pb-12 lg:flex xl:border-b border-gray-300'>
        <div className='lg:w-2/5 mb-2 md:mb-6'>
          <div className='md:w-70p'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='md:text-gray-850 md:text-3xl xl:text-4xl tracking-tight leading-10'>
              Homes for people on the frontlines of the COVID-19 crisis
            </h3>
          </div>
        </div>
        <div className='md:w-4/5 lg:w-3/5 mt-2'>
          <div className=''>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm md:text-lg text-gray-750'>
              To help battle the coronavirus, Airbnb is partnering with our
              hosts to connect 100,000 healthcare providers, relief workers, and
              first responders with clean, convenient places to stay that allow
              them to be close to their patients—and safely distanced from their
              own families. We may be apart, but we’ll get through this
              together.
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
