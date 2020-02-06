import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

// Components
import PlusCard from './PlusCard';

// Images
import img1 from '../../public/img/plus-1.jpg';

export default () => {
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
  return <>{loaded ? <PlusCard img={img1} /> : <Skeleton height={226} />}</>;
};
