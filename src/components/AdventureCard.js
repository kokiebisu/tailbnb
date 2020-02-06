import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default ({ img, location, title, price, days }) => {
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
      {loaded ? (
        <img className='rounded-lg' src={img} alt='' />
      ) : (
        <Skeleton height={385} width={255} />
      )}
      <p className='uppercase text-xs my-2 font-semibold'>{location}</p>
      <p className='my-1 w-5/6'>{title}</p>
      <p>
        {price}
        <span> · </span>
        {days} days
      </p>
    </div>
  );
};
