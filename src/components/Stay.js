import React from 'react';

// Component
import StayCard from '../components/StayCard';
import ShowAll from '../components/ShowAll';

// Images
// High Resolution
import stay1 from '../../public/img/high/stay1.jpg';
import stay2 from '../../public/img/high/stay2.jpg';
import stay3 from '../../public/img/high/stay3.jpg';
import stay4 from '../../public/img/high/stay4.jpg';
import stay5 from '../../public/img/high/stay5.jpg';
import stay6 from '../../public/img/high/stay6.jpg';
import stay7 from '../../public/img/high/stay7.jpg';
import stay8 from '../../public/img/high/stay8.jpg';

// Low Resolution
import stay1low from '../../public/img/low/stay1-low.jpg';
import stay2low from '../../public/img/low/stay2-low.jpg';
import stay3low from '../../public/img/low/stay3-low.jpg';
import stay4low from '../../public/img/low/stay4-low.jpg';
import stay5low from '../../public/img/low/stay5-low.jpg';
import stay6low from '../../public/img/low/stay6-low.jpg';
import stay7low from '../../public/img/low/stay7-low.jpg';
import stay8low from '../../public/img/low/stay8-low.jpg';

export default () => {
  const stays = [
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      location: 'Sol Madrid',
      title: 'Private Studio in Sol, Madrid',
      price: 91
    },
    {
      type: 'superhost',
      img: stay2,
      imglow: stay2low,
      location: 'Makawao',
      title: 'Adorable Garden Gingerbread',
      price: 257
    },
    {
      type: 'superhost',
      img: stay3,
      imglow: stay3low,
      location: 'Roma Norte',
      title: 'Radiant Apartment with Terrace in...',
      price: '104'
    },
    {
      type: 'superhost',
      img: stay4,
      imglow: stay4low,
      location: 'Portici',
      title: 'Villa San Gennariello',
      price: 87
    },
    {
      type: 'plus',
      img: stay5,
      imglow: stay5low,
      location: 'Old Town',
      title: 'Classical Apartment on the Royal...',
      price: 206
    },
    {
      type: 'normal',
      img: stay6,
      imglow: stay6low,
      location: 'Porto',
      title: 'PORTA33 | PORTO PENTHOUSE',
      price: 126
    },
    {
      type: 'superhost',
      img: stay7,
      imglow: stay7low,
      location: 'Krakow',
      title: 'Amazing and Extremely Central Flat',
      price: 31
    },
    {
      type: 'superhost',
      img: stay8,
      imglow: stay8low,
      location: 'Tricase',
      title: 'La Salentina, sea, nature & relax',
      price: 68
    }
  ];
  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {stays.map(({ id, type, img, imglow, location, title, price }) => {
          return (
            <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
              <StayCard
                key={id}
                type={type}
                img={img}
                imglow={imglow}
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
