import React, { useState } from 'react';

// Components
import PlusCard from './PlusCard';

// Images
// High Resolution
import img1 from '../../public/img/high/plus-1.jpg';
// Low Resolution
import img2 from '../../public/img/low/plus-1-low.jpg';

export default () => {
  return (
    <>
      <PlusCard img={img1} imglow={img2} />
    </>
  );
};
