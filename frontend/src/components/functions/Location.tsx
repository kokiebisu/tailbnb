import * as React from 'react';

interface Prop {
  location: string;
  price: number;
}

export const Location: React.FC<Prop> = ({ location, price }) => {
  return (
    <div className='py-3 my-2'>
      <div>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='text-gray-850 text-lg'>
          {location}
        </h3>
      </div>
      <div style={{ fontFamily: 'airbnb-book' }} className=''>
        <p className='text-xs text-gray-650 md:text-sm whitespace-normal'>
          ${price}/night average
        </p>
      </div>
    </div>
  );
};
