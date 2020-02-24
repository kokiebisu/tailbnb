import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Component
import { StayCard } from '../presentational/StayCard';
import ShowAll from '../ShowAll';

const GET_STAYS = gql`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
      picture_url
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_STAYS);

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full py-20'>
        <PulseLoader size={10} color={'#008489'} />
      </div>
    );
  }

  if (error) return `Error! ${error.message}`;
  return (
    <>
      {data ? (
        <div className='flex flex-wrap items-start justify-start w-full'>
          {data.stays.map(
            ({
              id,
              host_is_superhost,
              country,
              name,
              price,
              reviews_per_month,
              picture_url
            }) => {
              return (
                <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                  <StayCard
                    key={id}
                    id={id}
                    host_is_superhost={host_is_superhost}
                    country={country}
                    name={name}
                    price={price}
                    reviews_per_month={reviews_per_month}
                    picture_url={picture_url}
                    picture_url_low={picture_url}
                  />
                </div>
              );
            }
          )}
        </div>
      ) : null}

      <ShowAll title='Show(2000+)' />
    </>
  );
};
