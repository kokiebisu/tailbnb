import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';
import Link from 'next/link';

export default ({ id, img, imglow, country, title, cost, period }) => {
  return (
    <Link href='/adventures/[id]' as={`/adventures/${id}`}>
      <div className='w-30/31 cursor-pointer'>
        <LazyImage src={img} placeholder={imglow}>
          {(src, loading, isVisible) => (
            <img className='w-full rounded-lg' src={src} />
          )}
        </LazyImage>

        <p className='uppercase text-xs my-2 font-semibold'>{country}</p>
        <p className='my-1 w-5/6'>{title}</p>
        <p>
          From ${cost} / person
          <span> · </span>
          {period} days
        </p>
      </div>
    </Link>
  );
};
