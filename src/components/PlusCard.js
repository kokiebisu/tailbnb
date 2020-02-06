import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ img }) => {
  return (
    <div className='w-full'>
      <img
        className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
        src={img}
        alt='plus1'
      />
    </div>
  );
};
