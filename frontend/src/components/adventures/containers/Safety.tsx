import * as React from 'react';

export const Safety: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-7xl  py-12 bg-gray-350 rounded-xl'>
        <div className='px-4 md:px-16 w-full mx-auto max-w-6xl xl:px-0 flex justify-start items-start flex-wrap h-full'>
          <div
            style={{ fontFamily: 'airbnb-bold' }}
            className='w-full md:w-4/12 md:h-full '>
            <div className='mb-8 flex justify-start items-center h-full'>
              <div className='h-12 w-12 mr-3 '>
                <img
                  className='h-full w-full'
                  src='https://a0.muscache.com/pictures/4b4fb657-aff9-40cd-884a-e3785fa1ef91.jpg'
                />
              </div>
              <p className='text-2xl md:text-3xl text-gray-750'>Guest safety</p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='w-full md:w-8/12 md:pl-4 text-gray-750 text-lg '>
            <p className='mb-7'>
              Every adventure follows industry guidelines. We partnered with the
              Adventure Travel Trade Association, expert leaders in adventure
              travel, to define best practices and standards for safety.
            </p>
            <p>
              Please note outdoor activities carry risks, and you may be exposed
              to dangerous situations as part of this experience. Make sure you
              can participate safely given your abilities and the conditions
              (such as location, weather, and equipment).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
