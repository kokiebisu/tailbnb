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
      hostType
      img
      imglow
      size
      location
      title
      cost
      ratings
      reviews
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
            hostType,
            img,
            imglow,
            size,
            location,
            title,
            cost,
            ratings,
            reviews
          }) => {
            return (
              <div className='lg:w-1/3 xl:w-1/4 pb-5'>
                <THundredPlusCard
                  key={id}
                  hostType={hostType}
                  img={img}
                  imglow={imglow}
                  size={size}
                  location={location}
                  title={title}
                  cost={cost}
                  ratings={ratings}
                  reviews={reviews}
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
