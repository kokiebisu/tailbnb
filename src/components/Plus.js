import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

// Components
import PlusCard from './PlusCard';

// Images
import img1 from '../../public/img/plus-1.jpg';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export default () => {
  const [loaded, setLoaded] = useState(false);

  const setLoad = () => {
    sleep(2000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();

  if (loaded == false) {
    return <Skeleton height={226} />;
  }
  return <PlusCard img={img1} />;
};
