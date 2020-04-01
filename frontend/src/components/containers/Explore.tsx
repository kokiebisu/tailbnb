import * as React from 'react';
import { Fragment } from 'react';

// Dependency
import cuid from 'cuid';

// Components
import { ExploreCard } from '../functions/ExploreCard';

// Wrapper
import { SectionOverflow } from '../wrapper/SectionOverflow';

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
    <SectionOverflow title='Explore Airbnb'>
      <div className='pb-32 overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
              {explores.map(({ img, title }, index) => {
                if (index == explores.length - 1) {
                  return (
                    <Fragment key={cuid()}>
                      <div className='w-32 sm:w-1/3 cursor-pointer'>
                        <ExploreCard img={img} title={title} />
                      </div>
                    </Fragment>
                  );
                }
                return (
                  <Fragment key={cuid()}>
                    <div className='w-32 mr-5 sm:w-1/3 cursor-pointer'>
                      <ExploreCard img={img} title={title} />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionOverflow>
  );
};
