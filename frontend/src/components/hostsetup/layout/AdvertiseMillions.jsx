import * as React from 'react';
import { AdvertiseMillionsCard } from '../functions/AdvertiseMillionsCard';

// Images
const advertisemillions = require('../../../../public/img/high/advertise-millions.jpg');

export const AdvertiseMillions = () => {
  return (
    <>
      <div className='w-full px-6 md:px-0 md:max-w-3xl lg:max-w-5xl mx-auto pt-8 pb-16'>
        <div className='flex flex-col items-start md:items-center'>
          <div className='my-4 md:my-4 lg:my-8'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>
          <div>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-4xl md:text-5xl lg:text-6xl tracking-tighter text-gray-750 leading-9'>
              Advertise to millions
            </h3>
          </div>
        </div>
      </div>
      <div className='w-full md:max-w-2xl lg:max-w-5xl mx-auto'>
        <div className='w-full md:h-104 lg:h-112 px-6 md:px-0'>
          <img src={advertisemillions} className='w-full h-full' />
        </div>
      </div>
      <div className='my-10 w-full md:max-w-xl lg:max-w-5xl mx-auto'>
        <div className='flex flex-col lg:flex-row mx-6 md:mx-0'>
          <AdvertiseMillionsCard
            title='Guidance to get you set up'
            description=' As you’re creating your listing, we’ll ask you the questions that
            guests want to know about when booking. You’ll describe your home,
            providing details like what’s special about the space, including any
            quirks they can expect.'
          />
          <AdvertiseMillionsCard
            title='Tips along the way'
            description='If you’re having any trouble getting booked, we’ll provide you with advice on prices, settings, and other updates that can help you get reservations faster. And experienced hosts in our Community Centre can pitch in, too.'
          />
          <AdvertiseMillionsCard
            title='Millions of global guests'
            description='Once you’ve completed your listing, guests from all over can find your home in search results. There are nearly 2 million Airbnb guests each night and we have tools to help you get reservations that work for you.'
            link='Learn how Airbnb helps you get great guests'
          />
        </div>
      </div>
    </>
  );
};
