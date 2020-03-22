import * as React from 'react';
import { FeaturedCard } from './FeaturedCard';

export const CarouselCard = ({ bg, featured1, featured2, featured3 }) => {
  return (
    <>
      <div className={`mr-4`}>
        <FeaturedCard {...featured1} />
      </div>
      <div className={`mr-4`}>
        <FeaturedCard {...featured2} />
      </div>
      <div className={`mr-4`}>
        <FeaturedCard {...featured3} />
      </div>
    </>
  );
};
