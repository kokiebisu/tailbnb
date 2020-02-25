import * as React from 'react';
import Link from 'next/link';

interface Prop {
  id: string;
  img: string;
  experiences: number;
  type: string;
  description: string;
}

export const ExperienceCard: React.FC<Prop> = ({
  id,
  img,
  experiences,
  type,
  description
}) => {
  return (
    <Link href='/experiences/[id]' as={`/experiences/${id}`}>
      <div className='w-30/31'>
        <div className='h-full w-64 sm:w-full bg-white'>
          <img className='w-full rounded-lg' src={img} alt='adventure1' />
          <div className='flex flex-wrap items-center justify-start'>
            <p
              style={{ fontFamily: 'airbnb-medium' }}
              className='uppercase text-xs my-2 text-gray-650'>
              {experiences}+ Experiences
            </p>
          </div>
          <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
            {type}
          </p>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='whitespace-normal my-1 text-sm text-gray-750 tracking-wide'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
