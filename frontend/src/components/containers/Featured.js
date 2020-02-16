import React, { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import FeaturedCard from '../presentational/FeaturedCard';

// Images
// High Resolution
import featured1 from '../../../public/img/high/featured1.jpg';
import featured2 from '../../../public/img/high/featured2.jpg';
import featured3 from '../../../public/img/high/featured3.jpg';

// Low Resolution
import featured1low from '../../../public/img/low/featured1-low.jpg';
import featured2low from '../../../public/img/low/featured2-low.jpg';
import featured3low from '../../../public/img/low/featured3-low.jpg';

export default () => {
  const [loading, setLoading] = useState(true);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds) => {
    await sleep(seconds);
    setLoading(false);
  };

  const featureds = [
    {
      img: featured1,
      imglow: featured1low,
      verified: 940,
      description:
        'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
    },
    {
      img: featured2,
      imglow: featured2low,
      verified: 300,
      description:
        'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
    },
    {
      img: featured3,
      imglow: featured3low,
      verified: 290,
      description:
        'Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
    }
  ];
  setSleep(3000);
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center w-full py-20'>
          <PulseLoader size={10} color={'#008489'} />
        </div>
      ) : (
        <div className='overflow-y-hidden'>
          <div className='w-full h-full overflow-y-hidden'>
            <div className='h-full scroller'>
              <div className='scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured md:w-full'>
                {featureds.map(({ id, img, imglow, verified, description }) => {
                  return (
                    <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                      <FeaturedCard
                        key={id}
                        img={img}
                        imglow={imglow}
                        verified={verified}
                        description={description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
