import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Component
import AdventureCard from '../presentational/AdventureCard';
import ShowAll from '../ShowAll';

const GET_ADVENTURES = gql`
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
  const { loading, error, data } = useQuery(GET_ADVENTURES, {
    pollInterval: 5000
  });
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          data.adventures.map(
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
          )
        )}
      </div>

      <ShowAll title='Show all adventures' />
    </>
  );
};
