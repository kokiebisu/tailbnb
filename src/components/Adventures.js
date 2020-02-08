import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

// Component
import AdventureCard from '../components/AdventureCard';
import ShowAll from '../components/ShowAll';

// Images
import img1 from '../../public/img/adventures1.jpg';
import img2 from '../../public/img/adventures2.jpg';
import img3 from '../../public/img/adventures3.jpg';
import img4 from '../../public/img/adventures4.jpg';

export default () => {
  const adventures = [
    {
      img: img1,
      location: 'Norway',
      title: '2 Nights PACKAGE ALL Inclusive',
      price: 841,
      days: 3
    },
    {
      img: img2,
      location: 'Indonesia',
      title: 'Snorkeling and hiking in West Sumatra',
      price: 249,
      days: 2
    },
    {
      img: img3,
      location: 'Nepal',
      title: 'Trek to the lower Everest region',
      price: 1745,
      days: 11
    },
    {
      img: img4,
      location: 'Morocco',
      title: 'Active Adventure & Stay with Locals',
      price: 416,
      days: 4
    }
  ];

  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {adventures.map(({ img, location, title, price, days }) => {
          return (
            <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
              <AdventureCard
                img={img}
                location={location}
                title={title}
                price={price}
                days={days}
              />
            </div>
          );
        })}
      </div>
      <ShowAll title='Show all adventures' />
    </>
  );
};
