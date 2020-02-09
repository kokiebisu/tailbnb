import React from 'react';
import TravelCard from './TravelCard';

// Image
// High Resolution
import explore1 from '../../public/img/high/explore1.jpg';
import explore2 from '../../public/img/high/explore2.jpg';
import explore3 from '../../public/img/high/explore3.jpg';
// Low Resolution
import explore1low from '../../public/img/low/explore1-low.jpg';
import explore2low from '../../public/img/low/explore2-low.jpg';
import explore3low from '../../public/img/low/explore3-low.jpg';

export default () => {
  const countries = [
    {
      img: explore1,
      imglow: explore1low,
      location: 'Sydney'
    },
    {
      img: explore2,
      imglow: explore2low,
      location: 'Cape Town'
    },
    {
      img: explore3,
      imglow: explore3low,
      location: 'Buenos Aires'
    },
    {
      img: explore1,
      imglow: explore1low,
      location: 'Seoul'
    },
    {
      img: explore2,
      imglow: explore2low,
      location: 'Barcelona'
    },
    {
      img: explore3,
      imglow: explore3low,
      location: 'Los Angeles'
    }
  ];

  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-90 md:w-full'>
            {countries.map(({ id, img, imglow, location }) => {
              return (
                <div className='w-32 sm:w-1/3 mr-3'>
                  <TravelCard
                    key={id}
                    img={img}
                    imglow={imglow}
                    location={location}
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
