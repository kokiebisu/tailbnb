import * as React from 'react';
import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import { Location } from '../functions/Location';

// Wrapper
import { Section } from '../wrapper/Section';

interface Location {
  location: string;
  price: number;
}

export const Popular: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds: number) => {
    await sleep(seconds);
    setLoading(false);
  };

  const locations: Location[] = [
    { location: 'San Francisco', price: 216 },
    {
      location: 'Los Angeles',
      price: 213
    },
    {
      location: 'New York',
      price: 159
    },
    {
      location: 'Seattle',
      price: 134
    },
    {
      location: 'Denver',
      price: 128
    },
    {
      location: 'Washington DC',
      price: 166
    },
    {
      location: 'Phoenix',
      price: 232
    },
    {
      location: 'Austin',
      price: 242
    },
    { location: 'Houston', price: 351 },
    {
      location: 'New Orleans',
      price: 210
    }
  ];

  setSleep(5000);

  return (
    <>
      <Section title='Popular destinations in the United States'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          <div className='flex flex-wrap items-center justify-start w-full'>
            {locations.map(({ location, price }, index) => {
              return (
                <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
                  <Location key={index} location={location} price={price} />
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
};
