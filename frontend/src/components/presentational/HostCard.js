import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';

export default ({ title, location, country, img, imglow }) => {
  return (
    <div className='w-30/31'>
      <LazyImage src={img} placeholder={imglow}>
        {(src, loading, isVisible) => (
          <img className='w-full rounded-lg' src={src} />
        )}
      </LazyImage>

      <p style={{ fontFamily: 'airbnb-medium' }} className=' my-2 '>
        {title}
      </p>
      <p style={{ fontFamily: 'airbnb-book' }} className='text-sm my-2 '>
        {location}, {country}
      </p>
    </div>
  );
};
