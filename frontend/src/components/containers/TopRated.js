import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import TopRatedCard from '../presentational/TopRatedCard';
import ShowAll from '../ShowAll';

const GET_EXPERIENCES = gql`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      country
      img
      imglow
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_EXPERIENCES, {
    fetchPolicy: 'no-cache',
    ssr: true,
    pollInterval: 500
  });

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
      <div className='flex items-start justify-start flex-wrap w-full'>
        {data.experiences.map(
          ({ id, title, cost, ratings, reviews, country, img, imglow }) => {
            return (
              <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                <TopRatedCard
                  key={id}
                  img={img}
                  imglow={imglow}
                  title={title}
                  cost={cost}
                  ratings={ratings}
                  reviews={reviews}
                  country={country}
                />
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show all experiences' />
    </>
  );
};
