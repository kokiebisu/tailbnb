import React from 'react';
import { useState } from 'react';
import Data from '../../data/experiences.json';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import { HostCard } from '../functions/HostCard';

// Wrapper
import { ExploreSection } from '../wrapper/ExploreSection';

export const Hosts: any = () => {
  const [loading, setLoading] = useState(true);
  setInterval(() => setLoading(false), 1000);

  return (
    <>
      <ExploreSection title='Meet hosts around the world'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          <div className='flex items-start justify-start flex-wrap w-full'>
            {Data &&
              Data.map(({ title, location, country, img }, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                      <HostCard
                        title={title}
                        img={img}
                        location={location}
                        country={country}
                      />
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        )}
      </ExploreSection>
    </>
  );
};
