import React from 'react';

// Components
import ExploreCard from './ExploreCard';

// Images
import explore1 from '../../public/img/explore-1.jpg';
import explore2 from '../../public/img/explore-2.jpg';
import explore3 from '../../public/img/explore-3.jpg';

export default () => {
  const explores = [
    {
      img: explore1,
      title: 'Stays'
    },
    {
      img: explore2,
      title: 'Experiences'
    },
    {
      img: explore3,
      title: 'Adventures'
    }
  ];
  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full'>
            {explores.map(({ img, title }) => {
              return (
                <div className='w-32 sm:w-1/3 mr-2 cursor-pointer'>
                  <ExploreCard img={img} title={title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
