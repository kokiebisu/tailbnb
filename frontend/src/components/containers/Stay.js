import React, { useEffect, useState } from 'react';

// Component
import StayCard from '../presentational/StayCard';
import ShowAll from '../ShowAll';

export default ({ data }) => {
  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {data.stays.map(
          ({ id, hostType, location, title, cost, ratings, img, imglow }) => {
            return (
              <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                <StayCard
                  key={id}
                  id={id}
                  hostType={hostType}
                  img={img}
                  imglow={imglow}
                  location={location}
                  title={title}
                  cost={cost}
                  ratings={ratings}
                />
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
