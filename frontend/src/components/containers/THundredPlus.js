import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Component
import THundredPlusCard from '../presentational/THundredPlusCard';
import ShowAll from '../ShowAll';

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
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(staydata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {data.stays.map(
          ({
            id,
            host_is_superhost,
            img,
            imglow,
            size,
            country,
            name,
            price,
            reviews_per_month,
            number_of_reviews
          }) => {
            return (
              <div className='lg:w-1/3 xl:w-1/4 pb-5'>
                <THundredPlusCard
                  key={id}
                  host_is_superhost={host_is_superhost}
                  img={img}
                  imglow={imglow}
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
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
