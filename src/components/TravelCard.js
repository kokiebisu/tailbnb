import React, { useState } from 'react';
import Link from 'next/link';

// Dependency
import Skeleton from 'react-loading-skeleton';

export default ({ img, location }) => {
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
      <Link href={`/${location.toLowerCase()}`}>
        <div className='h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
          {loaded ? (
            <img
              src={img}
              className='h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none'
              alt=''
            />
          ) : (
            <Skeleton height={80} width={130} />
          )}

          <p className='text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold'>
            {location}
          </p>
        </div>
      </Link>
    </div>
  );
};
