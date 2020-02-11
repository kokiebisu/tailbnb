import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Component
import AdventureCard from '../presentational/AdventureCard';
import ShowAll from '../ShowAll';

const adventuredata = gql`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
      imglow
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(adventuredata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {data.adventures.map(
          ({ id, country, title, cost, period, img, imglow }) => {
            return (
              <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
                <AdventureCard
                  key={id}
                  img={img}
                  imglow={imglow}
                  country={country}
                  title={title}
                  cost={cost}
                  period={period}
                />
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show all adventures' />
    </>
  );
};
