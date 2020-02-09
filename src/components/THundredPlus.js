import React from 'react';

// Component
import THundredPlusCard from '../components/THundredPlusCard';
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
  const places = [
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    },
    {
      type: 'normal',
      img: stay1,
      imglow: stay1low,
      size: 'Entire apartment',
      location: 'Sol Madrid',
      title: 'Waterfront with extraordinary view',
      price: '86',
      ratings: '4.81',
      reviews: '156'
    }
  ];

  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {places.map(
          ({
            id,
            type,
            img,
            imglow,
            size,
            location,
            title,
            price,
            ratings,
            reviews
          }) => {
            return (
              <div className='lg:w-1/3 xl:w-1/4 pb-5'>
                <THundredPlusCard
                  key={id}
                  type={type}
                  img={img}
                  imglow={imglow}
                  size={size}
                  location={location}
                  title={title}
                  price={price}
                  ratings={ratings}
                  reviews={reviews}
                />
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
