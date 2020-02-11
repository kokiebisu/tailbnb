import React from 'react';

// Components
import HeartExperienceCard from '../presentational/HeartExperienceCard';

export default () => {
  return (
    <div className='flex items-start justify-between flex-wrap w-full'>
      <div className='w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/5'>
        <HeartExperienceCard />
      </div>
    </div>
  );
};
