import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Component
import { StayCard } from '../presentational/StayCard';
import { ShowAll } from '../ShowAll';

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

interface StayData {
  stays: Stay[];
}

interface Stay {
  id: string;
  host_is_superhost: string;
  country: string;
  name: string;
  price: number;
  reviews_per_month: number;
  picture_url: string;
}

export default () => {
  const { loading, error, data } = useQuery<StayData>(GET_STAYS);

  if (error) return `Error! ${error.message}`;
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center w-full py-20'>
          <PulseLoader size={10} color={'#008489'} />
        </div>
      ) : (
        data &&
        data.stays.map(
          (
            {
              id,
              host_is_superhost,
              country,
              name,
              price,
              reviews_per_month,
              picture_url
            },
            index
          ) => {
            return (
              <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                <StayCard
                  key={index}
                  id={id}
                  host_is_superhost={host_is_superhost}
                  country={country}
                  name={name}
                  price={price}
                  reviews_per_month={reviews_per_month}
                  picture_url={picture_url}
                />
              </div>
            );
          }
        )
      )}

      <ShowAll title='Show(2000+)' />
    </>
  );
};
