import React, { useState } from 'react';
import Link from 'next/link';
import LazyImage from 'react-lazy-progressive-image';

// Dependency
import Skeleton from 'react-loading-skeleton';

export default ({ img, imglow, title }) => {
  return (
    <div className='w-30/31'>
      <Link href={`/${title.toLowerCase()}`}>
        <div className='h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
          <LazyImage src={img} placeholder={imglow}>
            {(src, loading, isVisible) => (
              <img
                src={src}
                className='h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none'
              />
            )}
          </LazyImage>

          <p className='text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold'>
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};
