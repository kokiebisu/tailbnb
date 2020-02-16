import React from 'react';

// Components
import HeartExperienceCard from '../presentational/HeartExperienceCard';

export default () => {
  return (
    <div className='flex items-start justify-between flex-wrap w-full'>
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='block md:hidden w-1/2 lg:block lg:w-1/4 xl:w-1/5'>
        <HeartExperienceCard />
      </div>
      <div className='hidden w-1/2 xl:block xl:w-1/5'>
        <HeartExperienceCard />
      </div>
    </div>
  );
};
