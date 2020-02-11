import React from 'react';

// Component
import HomeCard from '../presentational/HomeCard';

export default () => {
  return (
    <div className='flex items-start justify-between flex-wrap w-full w-full'>
      <div className='w-1/3'>
        <HomeCard />
      </div>
      <div className='w-1/3'>
        <HomeCard />
      </div>
      <div className='w-1/3'>
        <HomeCard />
      </div>
    </div>
  );
};
