import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

const GET_STAYS = gql`
  query {
    stays {
      id
      hostType
      street
      name
      price
      reviews_per_month
      img
      imglow
    }
  }
`;

// Component
import StayCard from '../presentational/StayCard';
import ShowAll from '../ShowAll';

export default () => {
  const { loading, error, data } = useQuery(GET_STAYS);
  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          data.stays.map(
            ({
              id,
              hostType,
              street,
              name,
              price,
              reviews_per_month,
              img,
              imglow
            }) => {
              return (
                <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                  <StayCard
                    key={id}
                    id={id}
                    hostType={hostType}
                    img={img}
                    imglow={imglow}
                    street={street}
                    name={name}
                    price={price}
                    reviews_per_month={reviews_per_month}
                  />
                </div>
              );
            }
          )
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
