import * as React from 'react';
import { useState } from 'react';
// import { RenderSkeletonHorizontal } from '../../util/RenderSkeleton';
// import styled from 'styled-components';

// Components
import { PlusCard } from '../functions/PlusCard';

// Wrapper
import { Section } from '../wrapper/Section';

// Images
// High Resolution
const img1 = require('../../../public/img/high/plus-1.jpg');

export const Plus: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds: number) => {
    await sleep(seconds);
    setLoading(false);
  };

  setSleep(3000);

  return (
    <>
      <Section
        title='Airbnb Plus places to stay'
        phrase='A selection of places to stay verified for quality and design'>
        <PlusCard img={img1} loading={loading} />
      </Section>
    </>
  );
};
