import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Component
import { THundredPlusCard } from '../presentational/THundredPlusCard';
import { ShowAll } from '../ShowAll';

const staydata = gql`
  query {
    stays {
      id
      host_is_superhost
      size
      country
      name
      price
      reviews_per_month
      number_of_reviews
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
  size: string;
  country: string;
  name: string;
  price: number;
  reviews_per_month: number;
  number_of_reviews: number;
  picture_url: string;
}

export const THundredPlus: () => string | JSX.Element = () => {
  const { loading, error, data } = useQuery<StayData>(staydata);

  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          data &&
          data.stays.map(
            (
              {
                host_is_superhost,
                size,
                country,
                name,
                price,
                reviews_per_month,
                number_of_reviews,
                picture_url
              },
              index
            ) => {
              return (
                <div className='lg:w-1/3 xl:w-1/4 pb-5'>
                  <THundredPlusCard
                    key={index}
                    img={picture_url}
                    host_is_superhost={host_is_superhost}
                    size={size}
                    country={country}
                    name={name}
                    price={price}
                    reviews_per_month={reviews_per_month}
                    number_of_reviews={number_of_reviews}
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
