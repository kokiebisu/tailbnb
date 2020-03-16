import React from 'react';

// Components
import { FeaturedCard } from '../functions/FeaturedCard';

// Wrapper
import { SectionOverflow } from '../wrapper/SectionOverflow';

interface Featured {
  img: string;
  verified: number;
  description: string;
}

export const Featured: React.FC<{}> = () => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds: number) => {
    await sleep(seconds);
  };

  const featureds = [
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/e8afe40c-86e0-4064-8f98-7a742728f266.jpg',
      location: 'Cape Town',
      verified: 940,
      description:
        'Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.',
      type: 1,
      color: '#268cff'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/afd64fec-14ea-4dbe-9f20-a5b8ee660535.jpg',
      location: 'Sydney',
      verified: 390,
      description:
        'Browse verified places to stay with artful style, in a city that wows from beach to bushland.',
      type: 2,
      color: '#fa7921'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/7ed333a6-a2a3-4d02-bd86-022291fd3be4.jpg',
      location: 'Chicago',
      verified: 210,
      description:
        "Explore Chicago's stunning architecture from the inside-in homes verified for quality and design.",
      type: 3,
      color: '#fe9920'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/2e5b5fcf-df39-4486-a6a7-c1fc0c5790bc.jpg',
      location: 'San Francisco',
      verified: 290,
      description:
        'Discover Victorian flats, SoMa lofts,, and more verified places to stay in a city where invention meets counterculture.',
      type: 4,
      color: '#50c878'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/f8dd8070-c548-4a2b-bdb1-2b191395f8fa.jpg',
      location: 'Austin',
      verified: 400,
      description:
        'Come for the music, stay for the BBQ, and rest easy in places to stay verified for quality and comfort.',
      type: 5,
      color: '#47315b'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/17c76104-0a61-4e32-b9e4-dcf99f1f9237.jpg',
      location: 'Melbourne',
      verified: 440,
      description:
        'Book sunny lofts, beachfront flats, and more verified places to stay in a city with world-class coffee and street art.',
      type: 6,
      color: '#c64971'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/316c7597-08da-4d77-9243-13292e282050.jpg',
      location: 'London',
      verified: 550,
      description:
        'Explore London from secluded garden flats and luminous lofts—all verified for quality and design.',
      type: 7,
      color: '#2b3651'
    },
    {
      img:
        'https://a0.muscache.com/4ea/air/v2/pictures/d82b445b-b7ce-4277-9131-3aab48633e9d.jpg',
      location: 'Los Angeles',
      verified: 930,
      description:
        'Find beachside bungalows, mid-century modern cottages, and more verified places to stay in the City of Angels.',
      type: 8,
      color: '#dd5337'
    }
  ];

  setSleep(3000);

  return (
    <>
      <SectionOverflow
        title='Featured Airbnb Plus destinations'
        phrase='Browse beautiful places to stay with all the comforts of home, plus more'>
        <div className='overflow-y-hidden'>
          <div className='w-full h-full overflow-y-hidden'>
            <div className='h-full scroller'>
              <div className='grid grid-cols-8 gap-4 not-sr-only flex scrollable sm:inset-x-0 flex items-start justify-start py-2 min-w-512 rounded-xl'>
                {featureds.map((featured) => {
                  return (
                    <div className=''>
                      <FeaturedCard {...featured} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionOverflow>
    </>
  );
};
