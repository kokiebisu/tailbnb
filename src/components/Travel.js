import React from 'react';
import TravelCard from './TravelCard';

import explore1 from '../../public/img/explore-1.jpg';
import explore2 from '../../public/img/explore-2.jpg';
import explore3 from '../../public/img/explore-3.jpg';

export default () => {
  const countries = [
    {
      img: explore1,
      location: 'Sydney'
    },
    {
      img: explore2,
      location: 'Cape Town'
    },
    {
      img: explore3,
      location: 'Buenos Aires'
    },
    {
      img: explore1,
      location: 'Seoul'
    },
    {
      img: explore2,
      location: 'Barcelona'
    },
    {
      img: explore3,
      location: 'Los Angeles'
    }
  ];

  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-90 md:w-full'>
            {countries.map(({ img, location }) => {
              return (
                <div className='w-32 sm:w-1/3 mr-3'>
                  <TravelCard img={img} location={location} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
