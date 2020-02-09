import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';

export default ({ img, imglow, experiences, type, description }) => {
  return (
    <div className='w-30/31'>
      <div className='h-full w-64 sm:w-full bg-white'>
        <LazyImage src={img} placeholder={imglow}>
          {(src, loading, isVisible) => (
            <img className='w-full rounded-lg' src={src} alt='adventure1' />
          )}
        </LazyImage>

        <div className='flex flex-wrap items-center justify-start'>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='uppercase text-xs my-2 text-gray-650'>
            {experiences}+ Experiences
          </p>
        </div>
        <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
          {type}
        </p>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='whitespace-normal my-1 text-sm text-gray-750 tracking-wide'>
          {description}
        </p>
      </div>
    </div>
  );
};
