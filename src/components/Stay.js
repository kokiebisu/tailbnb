import React from 'react';

// Component
import StayCard from '../components/StayCard';
import ShowAll from '../components/ShowAll';

// Images
import stay1 from '../../public/img/stay-1.jpg';
import stay2 from '../../public/img/stay-2.jpg';
import stay3 from '../../public/img/stay-3.jpg';
import stay4 from '../../public/img/stay-4.jpg';
import stay5 from '../../public/img/stay-5.jpg';
import stay6 from '../../public/img/stay-6.jpg';
import stay7 from '../../public/img/stay-7.jpg';
import stay8 from '../../public/img/stay-8.jpg';

export default () => {
  const stays = [
    {
      type: 'normal',
      img: stay1,
      location: 'Sol Madrid',
      title: 'Private Studio in Sol, Madrid',
      price: 91
    },
    {
      type: 'superhost',
      img: stay2,
      location: 'Makawao',
      title: 'Adorable Garden Gingerbread',
      price: 257
    },
    {
      type: 'superhost',
      img: stay3,
      location: 'Roma Norte',
      title: 'Radiant Apartment with Terrace in...',
      price: '104'
    },
    {
      type: 'superhost',
      img: stay4,
      location: 'Portici',
      title: 'Villa San Gennariello',
      price: 87
    },
    {
      type: 'plus',
      img: stay5,
      location: 'Old Town',
      title: 'Classical Apartment on the Royal...',
      price: 206
    },
    {
      type: 'normal',
      img: stay6,
      location: 'Porto',
      title: 'PORTA33 | PORTO PENTHOUSE',
      price: 126
    },
    {
      type: 'superhost',
      img: stay7,
      location: 'Krakow',
      title: 'Amazing and Extremely Central Flat',
      price: 31
    },
    {
      type: 'superhost',
      img: stay8,
      location: 'Tricase',
      title: 'La Salentina, sea, nature & relax',
      price: 68
    }
  ];
  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {stays.map(({ type, img, location, title, price }) => {
          return (
            <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
              <StayCard
                type={type}
                img={img}
                location={location}
                title={title}
                price={price}
              />
            </div>
          );
        })}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
