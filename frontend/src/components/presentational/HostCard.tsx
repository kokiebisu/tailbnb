import * as React from 'react';

interface Prop {
  title: string;
  location: string;
  country: string;
  img: string;
}

export const HostCard: React.FC<Prop> = ({ title, location, country, img }) => {
  return (
    <div className='w-30/31'>
      <img className='w-full rounded-lg' src={img} />
      <p style={{ fontFamily: 'airbnb-medium' }} className=' my-2 '>
        {title}
      </p>
      <p style={{ fontFamily: 'airbnb-book' }} className='text-sm my-2 '>
        {location}, {country}
      </p>
    </div>
  );
};
