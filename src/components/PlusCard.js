import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ img }) => {
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
    <div className='w-full'>
      {loaded ? (
        <img
          className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
          src={img}
          alt=''
        />
      ) : (
        <Skeleton height={226} />
      )}
    </div>
  );
};
