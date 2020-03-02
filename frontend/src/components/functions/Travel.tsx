import React from 'react';
import { TravelCard } from '../../components/functions/TravelCard';

// Wrapper
import { ExploreSectionOverflow } from '../wrapper/ExploreSectionOverflow';

// Image
// High Resolution
const explore1 = require('../../../public/img/high/explore1.jpg');
const explore2 = require('../../../public/img/high/explore2.jpg');
const explore3 = require('../../../public/img/high/explore3.jpg');
// Low Resolution
const explore1low = require('../../../public/img/low/explore1-low.jpg');
const explore2low = require('../../../public/img/low/explore2-low.jpg');
const explore3low = require('../../../public/img/low/explore3-low.jpg');

export const Travel: React.FC<{}> = () => {
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
    <ExploreSectionOverflow title='Travel the world with Airbnb'>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen'>
              {countries.map(({ img, imglow, location }, index) => {
                return (
                  <div className='min-w-32 w-full mr-3'>
                    <TravelCard
                      key={index}
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
    </ExploreSectionOverflow>
  );
};
