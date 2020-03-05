import * as React from 'react';

// Images
const detail2 = require('../../../../public/img/high/staydetail2.jpg');

export const Host: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-8 md:py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 md:h-full'>
          <p className='lg:sticky lg:top-0 text-2xl md:text-3xl text-gray-750'>
            Your host
          </p>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 md:px-4 text-gray-750 text-lg'>
          <div className='my-10 h-32 w-32 md:mb-12'>
            <img className='w-full h-full rounded-full' src={detail2} />
          </div>
          <h3 style={{ fontFamily: 'airbnb-medium' }} className='mb-3 text-2xl'>
            Mohamed
          </h3>
          <p className='mb-7 leading-relaxed'>
            Im an official Mountain guide born and raised in the atlas mountains
            i worked as a guide and trek planner for more tgan 17 Years i like
            meeting new people and make new friends in adfition to sharing my
            culture
          </p>

          <button
            style={{ fontFamily: 'airbnb-bold' }}
            className='border-2 border-green-850 rounded text-green-850 text-base py-2 px-4 '>
            Contact host
          </button>
        </div>
      </div>
    </div>
  );
};
