import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ img, verified, description }) => {
  const [loaded, setLoaded] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };
  setLoad();
  return (
    <div className='w-30/31'>
      <div className='h-full w-64 sm:w-full bg-white'>
        {loaded ? (
          <img className='rounded-xl' src={img} alt='adventure1' />
        ) : (
          <Skeleton height={220} />
        )}
        <div className='flex flex-wrap items-center justify-start'>
          <p className='uppercase text-xs my-2 font-bold text-pink-700'>
            {verified}+ Verified Stays
          </p>
        </div>
        <p className='whitespace-normal my-1 text-sm tracking-wide'>
          {description}
        </p>
      </div>
    </div>
  );
};
