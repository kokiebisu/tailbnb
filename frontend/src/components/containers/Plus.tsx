import * as React from 'react';

// Components
import { PlusCard } from '../functions/PlusCard';

// Wrapper
import { Section } from '../wrapper/Section';

// Images
// High Resolution
const img1 = require('../../../public/img/high/plus-1.jpg');

export const Plus: React.FC<{}> = () => {
  return (
    <>
      <Section
        title='Airbnb Plus places to stay'
        phrase='A selection of places to stay verified for quality and design'>
        <PlusCard img={img1} />
      </Section>
    </>
  );
};
