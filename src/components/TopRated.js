import React from 'react';

// Components
import TopRatedCard from '../components/TopRatedCard';
import ShowAll from './ShowAll';

// Images
import experience1 from '../../public/img/high/experience-1.jpg';
import experience2 from '../../public/img/high/experience-2.jpg';
import experience3 from '../../public/img/high/experience-3.jpg';
import experience4 from '../../public/img/high/experience-4.jpg';

export default () => {
  const toprateds = [
    {
      img: experience1,
      location: 'Italy',
      title: 'Luca & Lorenzo, cooking in Chianti hills',
      price: 172,
      reviews: 1765
    },
    {
      img: experience2,
      location: 'Italy',
      title: 'Truffle experience Rome',
      price: 148,
      reviews: 621
    },
    {
      img: experience3,
      location: 'Japan',
      title: 'Feeling Samurai Soul',
      price: 119,
      reviews: 1047
    },
    {
      img: experience4,
      location: 'Italy',
      title: 'Lisbon best flavors',
      price: 90,
      reviews: 3733
    }
  ];
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {toprateds.map(({ img, location, title, price, reviews }) => {
          <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
            <TopRatedCard
              img={img}
              location={location}
              title={title}
              price={price}
              reviews={reviews}
            />
          </div>;
        })}
      </div>
      <ShowAll title='Show all experiences' />
    </>
  );
};
