import React from 'react';

export const Notice = () => {
  return (
    <div className='py-6 px-6 md:px-10 xl:px-32 xl:max-w-12xl'>
      <div className='relative border border-gray-300 md:mt-4 bg-white md:rounded-lg pt-7 pb-6'>
        <div className='flex'>
          <div className='mr-6'>
            <div
              style={{ backgroundColor: '#F6D55C' }}
              className='absolute rounded-lg rounded-r-none top-0 left-0 w-2 h-full'></div>
          </div>
          <div>
            <div>
              <h3 style={{ fontFamily: 'airbnb-medium' }}>
                Latest info about cancellations
              </h3>
            </div>
            <div className='w-11/12'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750'>
                For travel impacted by the coronavirus, we’re offering updated
                cancellation options to help guests and hosts during this
                difficult time. &nbsp;
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='underline'
                  href=''>
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
