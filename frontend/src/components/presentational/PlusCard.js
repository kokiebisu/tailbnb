import React from 'react';
import LazyImage from 'react-lazy-progressive-image';

export default ({ img, imglow }) => {
  return (
    <div className='w-full cursor pointer'>
      <LazyImage src={img} placeholder={imglow}>
        {(src, loading, isVisible) => (
          <img
            className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
            src={src}
          />
        )}
      </LazyImage>
    </div>
  );
};
