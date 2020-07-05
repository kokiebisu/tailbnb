import React from 'react';
import { TravelCard } from './TravelCard';

// Wrapper
import { ExploreSectionOverflow } from '../wrapper/ExploreSectionOverflow';

// Image
const sydney = require('../../../public/img/high/sydney.jpg');
const capetown = require('../../../public/img/high/capetown.jpg');
const buenosaires = require('../../../public/img/high/buenosaires.jpg');
const seoul = require('../../../public/img/high/seoul.jpg');
const barcelona = require('../../../public/img/high/barcelona.jpg');
const losangeles = require('../../../public/img/high/losangeles.jpg');

export const Travel: React.FC<{}> = () => {
  const countries = [
    {
      img: sydney,
      imglow: sydney,
      location: 'Sydney',
    },
    {
      img: capetown,
      imglow: capetown,
      location: 'Cape Town',
    },
    {
      img: buenosaires,
      imglow: buenosaires,
      location: 'Buenos Aires',
    },
    {
      img: seoul,
      imglow: seoul,
      location: 'Seoul',
    },
    {
      img: barcelona,
      imglow: barcelona,
      location: 'Barcelona',
    },
    {
      img: losangeles,
      imglow: losangeles,
      location: 'Los Angeles',
    },
  ];

  return (
    <ExploreSectionOverflow title='Travel the world with Airbnb'>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen'>
              {countries.map(({ img, imglow, location }, index) => {
                return (
                  <div key={index} className='min-w-32 w-full mr-3'>
                    <TravelCard img={img} imglow={imglow} location={location} />
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
