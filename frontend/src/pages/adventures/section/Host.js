import React from 'react';

// Images
import detail2 from '../../../../public/img/high/staydetail2.jpg';

export default () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
          Your host
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 px-4 text-gray-750 text-lg '>
          <div className='h-32 w-32 mb-12'>
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
