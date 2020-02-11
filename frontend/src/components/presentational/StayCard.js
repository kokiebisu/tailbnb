import React, { useState } from 'react';
import LazyImage from 'react-lazy-progressive-image';
import Link from 'next/link';

export default ({
  id,
  hostType,
  img,
  imglow,
  location,
  title,
  cost,
  ratings
}) => {
  const renderhost = () => {
    if (hostType === 'normal') {
      return (
        <div className='md:flex md:flex-wrap md:items-center md:justify-start'>
          <p className='mt-3 text-sm sm:my-2 font-light text-gray-600'>
            {location}
          </p>
        </div>
      );
    } else if (hostType === 'superhost') {
      return (
        <div className='md:flex md:flex-wrap md:items-center md:justify-start'>
          <p className='uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs'>
            {hostType}
          </p>
          <p className='sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600'>
            {location}
          </p>
        </div>
      );
    } else if (hostType === 'plus') {
      return (
        <div className='sm:flex sm:flex-wrap sm:items-center sm:justify-start'>
          <p className='inline-block mt-3 md:mt-0 px-1 rounded text-white uppercase tracking-wide text-xs font-semibold bg-pink-800'>
            {hostType}
          </p>
          <p className='sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600'>
            {location}
          </p>
        </div>
      );
    }
  };

  return (
    <Link href='/rooms/[id]' as={`/rooms/${id}`}>
      <div className='w-30/31'>
        <LazyImage src={img} placeholder={imglow}>
          {(src, loading, isVisible) => (
            <img className='w-full rounded' src={src} />
          )}
        </LazyImage>

        <div className='flex flex-wrap items-center justify-between'>
          {renderhost()}
          <div className='flex items-center justify-center flex-wrap'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='13'
              height='13'
              viewBox='0 0 37.286 37.287'
              style={{ fill: '#F5385D' }}>
              <g>
                <path
                  d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
		c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
		c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
		c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
		c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
		C37.425,15.013,37.226,15.808,36.683,16.339z'
                />
              </g>
            </svg>
            <p className='pl-1 text-sm'>{ratings}</p>
          </div>
        </div>
        <p className='my-1'>{title}</p>
        <p className='tracking-wide'>
          <span className='font-bold'>${cost} CAD</span>/night
        </p>
      </div>
    </Link>
  );
};
