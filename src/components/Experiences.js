import React from 'react';

// Components
import ExperienceCard from './ExperienceCard';

// Images
// High Resolution
import featured1 from '../../public/img/high/featured1.jpg';
import featured2 from '../../public/img/high/featured2.jpg';
import featured3 from '../../public/img/high/featured3.jpg';

// Low Resolution
import featured1low from '../../public/img/low/featured1-low.jpg';
import featured2low from '../../public/img/low/featured2-low.jpg';
import featured3low from '../../public/img/low/featured3-low.jpg';

export default () => {
  const featureds = [
    {
      img: featured1,
      imglow: featured1low,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    },
    {
      img: featured1,
      imglow: featured1low,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    },
    {
      img: featured1,
      imglow: featured1low,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    }
  ];
  return (
    <>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-start justify-startpy-2 w-featured md:w-full'>
              {featureds.map(
                ({ id, img, imglow, experiences, type, description }) => {
                  return (
                    <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                      <ExperienceCard
                        key={id}
                        img={img}
                        imglow={imglow}
                        experiences={experiences}
                        type={type}
                        description={description}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
