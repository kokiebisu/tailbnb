import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';

export default ({ img, imglow, location, title, price, days }) => {
  return (
    <div className='w-30/31'>
      <LazyImage src={img} placeholder={imglow}>
        {(src, loading, isVisible) => (
          <img className='w-full rounded-lg' src={src} />
        )}
      </LazyImage>

      <p className='uppercase text-xs my-2 font-semibold'>{location}</p>
      <p className='my-1 w-5/6'>{title}</p>
      <p>
        From ${price} / person
        <span> · </span>
        {days} days
      </p>
    </div>
  );
};
