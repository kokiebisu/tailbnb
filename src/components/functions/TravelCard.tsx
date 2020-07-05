import * as React from 'react';
// const { LazyImage } = require('react-lazy-progressive-image');
import Link from 'next/link';

interface Props {
  id?: string;
  img: string;
  imglow: string;
  location: string;
}

export const TravelCard: React.FC<Props> = ({ img, location }) => {
  return (
    <div className='w-30/31'>
      <Link href={`/${location.toLowerCase()}`}>
        <div className='h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
          <img src={img} className='w-full h-full rounded-b-none rounded-lg ' />
          <p className='text-sm py-3 pl-4 sm:pl-4 text-gray-750 font-semibold'>
            {location}
          </p>
        </div>
      </Link>
    </div>
  );
};
