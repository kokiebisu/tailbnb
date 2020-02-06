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
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
          <AdventureCard
            img={img1}
            location='Norway'
            title='2 Nights PACKAGE All Inclusive'
            price='From $841 / person'
            days='3'
          />
        </div>
        <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
          <AdventureCard
            img={img2}
            location='Indonesia'
            title='Snorkeling and hiking in West Sumatra'
            price='From $249 / person'
            days='2'
          />
        </div>
        <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
          <AdventureCard
            img={img3}
            location='Nepal'
            title='Trek to the lower Everest region'
            price='From $1,745 / person'
            days='11'
          />
        </div>
        <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
          <AdventureCard
            img={img4}
            location='Morocco'
            title='Active Adventure & Stay with Locals'
            price='From $416 / person'
            days='4'
          />
        </div>
      </div>
      <ShowAll title='Show all adventures' />
    </>
  );
};
