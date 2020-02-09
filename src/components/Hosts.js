import React from 'react';

// Components
import TopRatedCard from '../components/TopRatedCard';
import ShowAll from './ShowAll';
import HostCard from '../components/HostCard';

// Images
// High Resolution
import experience1 from '../../public/img/high/experience1.jpg';
import experience2 from '../../public/img/high/experience2.jpg';
import experience3 from '../../public/img/high/experience3.jpg';
import experience4 from '../../public/img/high/experience4.jpg';
// Low Resolution
import experience1low from '../../public/img/low/experience1-low.jpg';
import experience2low from '../../public/img/low/experience2-low.jpg';
import experience3low from '../../public/img/low/experience3-low.jpg';
import experience4low from '../../public/img/low/experience4-low.jpg';

export default () => {
  const hosts = [
    {
      img: experience1,
      imglow: experience1low,
      description: 'Handmade pasta class with grandma',
      location: 'Rome, Italy'
    },
    {
      img: experience1,
      imglow: experience1low,
      description: 'Handmade pasta class with grandma',
      location: 'Rome, Italy'
    },
    {
      img: experience1,
      imglow: experience1low,
      description: 'Handmade pasta class with grandma',
      location: 'Rome, Italy'
    },
    {
      img: experience1,
      imglow: experience1low,
      description: 'Handmade pasta class with grandma',
      location: 'Rome, Italy'
    }
  ];
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {hosts.map(({ id, img, imglow, description, location }) => {
          return (
            <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
              <HostCard
                key={id}
                img={img}
                imglow={imglow}
                description={description}
                location={location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
