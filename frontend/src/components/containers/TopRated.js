import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import TopRatedCard from '../cards/TopRatedCard';
import ShowAll from '../ShowAll';

const experiencedata = gql`
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
  const { loading, error, data } = useQuery(experiencedata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full grid'>
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
