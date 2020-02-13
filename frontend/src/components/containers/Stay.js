import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Component
import StayCard from '../presentational/StayCard';
import ShowAll from '../ShowAll';

export const GET_STAYS = gql`
  query {
    stays {
      id
      hostType
      location
      title
      cost
      ratings
      img
      imglow
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_STAYS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {data.stays.map(
          ({ id, hostType, location, title, cost, ratings, img, imglow }) => {
            return (
              <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                <StayCard
                  key={id}
                  id={id}
                  hostType={hostType}
                  img={img}
                  imglow={imglow}
                  location={location}
                  title={title}
                  cost={cost}
                  ratings={ratings}
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
