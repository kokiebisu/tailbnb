import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';

export default ({ img, imglow, verified, description }) => {
  return (
    <div className='w-30/31'>
      <div className='h-full w-64 sm:w-full bg-white'>
        <LazyImage src={img} placeholder={imglow}>
          {(src, loading, isVisible) => (
            <img className='w-full rounded-xl' src={src} alt='adventure1' />
          )}
        </LazyImage>

        <div className='flex flex-wrap items-center justify-start'>
          <p className='uppercase text-xs my-2 font-bold text-pink-700'>
            {verified}+ Verified Stays
          </p>
        </div>
        <p className='whitespace-normal my-1 text-sm tracking-wide'>
          {description}
        </p>
      </div>
    </div>
  );
};
