import * as React from 'react';
import Link from 'next/link';

interface Prop {
  id: string;
  img: string;
  country: string;
  title: string;
  cost: number;
  period: number;
  loading: boolean;
}

export const AdventureCard: React.FC<Prop> = ({
  id,
  img,
  country,
  title,
  cost,
  period,
  loading
}) => {
  return (
    <>
      {loading ? (
        <div className='w-full mr-3 mb-3 rounded mb-16 h-88'>
          <div id='skeleton-pulse--vertical' />
          <div className='w-full mb-3 h-4'>
            <div id='skeleton-pulse--vertical' />
          </div>
          <div className='w-80p h-4'>
            <div id='skeleton-pulse--vertical' />
          </div>
        </div>
      ) : (
        <Link href='/adventures/[id]' as={`/adventures/${id}`}>
          <div className='cursor-pointer'>
            <div>
              <img className='w-full h-full rounded-lg' src={img} />
            </div>
            <div className='mt-2 mb-1 md:mb-2'>
              <p id='card_category' className='uppercase text-2xs md:text-xs'>
                {country}
              </p>
            </div>
            <div
              className='text-sm md:text-base'
              style={{ fontFamily: 'airbnb-book' }}>
              <div className='my-1'>
                <p className='leading-4 truncate'>{title}</p>
              </div>
              <div>
                <p>
                  From ${cost} / person
                  <span> · </span>
                  {period} days
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
