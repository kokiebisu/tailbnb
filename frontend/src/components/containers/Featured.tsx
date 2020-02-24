import React, { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import { FeaturedCard } from '../presentational/FeaturedCard';

// Images
// High Resolution
const featured1 = require('../../../public/img/high/featured1.jpg');
const featured2 = require('../../../public/img/high/featured2.jpg');
const featured3 = require('../../../public/img/high/featured3.jpg');

interface Featured {
  img: string;
  verified: number;
  description: string;
}

export const Featured: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds: number) => {
    await sleep(seconds);
    setLoading(false);
  };

  const featureds = [
    {
      img: featured1,
      verified: 940,
      description:
        'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
    },
    {
      img: featured2,
      verified: 300,
      description:
        'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
    },
    {
      img: featured3,
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
                {featureds.map(({ img, verified, description }, index) => {
                  return (
                    <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                      <FeaturedCard
                        key={index}
                        img={img}
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
