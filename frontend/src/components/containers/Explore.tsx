import * as React from 'react';

// Components
import { ExploreCard } from '../presentational/ExploreCard';

// Images
// High Resolution
const explore1 = require('../../../public/img/high/explore1.jpg');
const explore2 = require('../../../public/img/high/explore2.jpg');
const explore3 = require('../../../public/img/high/explore3.jpg');

interface Explore {
  img: string;
  title: string;
}

const explores: Explore[] = [
  {
    img: explore1,
    title: 'Stay'
  },
  {
    img: explore2,
    title: 'Experience'
  },
  {
    img: explore3,
    title: 'Adventure'
  }
];

export const Explore: React.FC<{}> = () => {
  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
            {explores.map(({ img, title }, index) => {
              return (
                <div className='w-32 mr-4 sm:w-1/3 cursor-pointer'>
                  <ExploreCard key={index} img={img} title={title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
