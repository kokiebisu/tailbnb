import React from 'react';

// Components
import ExploreCard from '../cards/ExploreCard';

// Images
// High Resolution
import explore1 from '../../../public/img/high/explore1.jpg';
import explore2 from '../../../public/img/high/explore2.jpg';
import explore3 from '../../../public/img/high/explore3.jpg';
// Low Resolution
import explore1low from '../../../public/img/low/explore1-low.jpg';
import explore2low from '../../../public/img/low/explore2-low.jpg';
import explore3low from '../../../public/img/low/explore3-low.jpg';

export default () => {
  const explores = [
    {
      img: explore1,
      imglow: explore1low,
      title: 'Stays'
    },
    {
      img: explore2,
      imglow: explore2low,
      title: 'Experiences'
    },
    {
      img: explore3,
      imglow: explore3low,
      title: 'Adventures'
    }
  ];
  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
            {explores.map(({ img, imglow, title }, index) => {
              return (
                <div className='w-32 sm:w-1/3 cursor-pointer'>
                  <ExploreCard
                    key={index}
                    id={index}
                    img={img}
                    imglow={imglow}
                    title={title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
