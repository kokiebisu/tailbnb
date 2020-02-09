import React, { useState } from 'react';

// Components
import PlusCard from './PlusCard';

// Images
import img1 from '../../public/img/high/plus-1.jpg';
import img2 from '../../public/img/low/plus-1-low.jpg';

export default () => {
  return (
    <>
      <PlusCard img={img1} imglow={img2} />
    </>
  );
};
