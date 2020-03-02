import * as React from 'react';
import Link from 'next/link';

interface Prop {
  img: string;
  title: string;
}

export const ExploreCard: React.FC<Prop> = ({ img, title }) => {
  return (
    <div className='w-30/31'>
      <Link
        href={`/${title.toLowerCase()}/index.tsx`}
        as={`/${title.toLowerCase()}`}>
        <div className='h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
          <img
            src={img}
            className='h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none'
          />
          <p className='text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold'>
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};
