import * as React from 'react';
import Link from 'next/link';

interface Prop {
  id: string;
  img: string;
  country: string;
  title: string;
  cost: number;
  period: number;
}

export const AdventureCard: React.FC<Prop> = ({
  id,
  img,
  country,
  title,
  cost,
  period
}) => {
  return (
    <Link href='/adventures/[id]' as={`/adventures/${id}`}>
      <div className='w-30/31 cursor-pointer'>
        <img className='w-full rounded-lg' src={img} />

        <p className='uppercase text-xs my-2 font-semibold'>{country}</p>
        <p className='my-1 w-5/6'>{title}</p>
        <p>
          From ${cost} / person
          <span> · </span>
          {period} days
        </p>
      </div>
    </Link>
  );
};
