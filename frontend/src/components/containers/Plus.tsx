import * as React from 'react';

// Components
import { PlusCard } from '../presentational/PlusCard';

// Images
// High Resolution
const img1 = require('../../../public/img/high/plus-1.jpg');

export const Plus: React.FC<{}> = () => {
  return (
    <>
      <PlusCard img={img1} />
    </>
  );
};
