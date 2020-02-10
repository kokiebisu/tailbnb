import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import TopRatedCard from '../cards/TopRatedCard';
import ShowAll from '../ShowAll';

// Images
// High Resolution
import experience1 from '../../../public/img/high/experience1.jpg';
import experience2 from '../../../public/img/high/experience2.jpg';
import experience3 from '../../../public/img/high/experience3.jpg';
import experience4 from '../../../public/img/high/experience4.jpg';
// Low Resolution
import experience1low from '../../../public/img/low/experience1-low.jpg';
import experience2low from '../../../public/img/low/experience2-low.jpg';
import experience3low from '../../../public/img/low/experience3-low.jpg';
import experience4low from '../../../public/img/low/experience4-low.jpg';

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
