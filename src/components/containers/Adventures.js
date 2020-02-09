import React, { useState } from 'react';

// Component
import AdventureCard from '../cards/AdventureCard';
import ShowAll from '../ShowAll';

// Images
// High Resolution
import img1 from '../../../public/img/high/adventures1.jpg';
import img2 from '../../../public/img/high/adventures2.jpg';
import img3 from '../../../public/img/high/adventures3.jpg';
import img4 from '../../../public/img/high/adventures4.jpg';

// Low Resolution
import img1low from '../../../public/img/low/adventures1-low.jpg';
import img2low from '../../../public/img/low/adventures2-low.jpg';
import img3low from '../../../public/img/low/adventures3-low.jpg';
import img4low from '../../../public/img/low/adventures4-low.jpg';

export default () => {
  const adventures = [
    {
      img: img1,
      imglow: img1low,
      location: 'Norway',
      title: '2 Nights PACKAGE ALL Inclusive',
      price: 841,
      days: 3
    },
    {
      img: img2,
      imglow: img2low,
      location: 'Indonesia',
      title: 'Snorkeling and hiking in West Sumatra',
      price: 249,
      days: 2
    },
    {
      img: img3,
      imglow: img3low,
      location: 'Nepal',
      title: 'Trek to the lower Everest region',
      price: 1745,
      days: 11
    },
    {
      img: img4,
      imglow: img4low,
      location: 'Morocco',
      title: 'Active Adventure & Stay with Locals',
      price: 416,
      days: 4
    }
  ];

  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {adventures.map(({ id, img, imglow, location, title, price, days }) => {
          return (
            <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
              <AdventureCard
                key={id}
                img={img}
                imglow={imglow}
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
