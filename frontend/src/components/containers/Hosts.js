import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import TopRatedCard from '../presentational/TopRatedCard';
import ShowAll from '../ShowAll';
import HostCard from '../presentational/HostCard';

const experiencedata = gql`
  query {
    experiences {
      id
      title
      location
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
      <div className='flex items-start justify-start flex-wrap w-full'>
        {data.experiences.map(
          ({ id, title, location, country, img, imglow }) => {
            return (
              <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                <HostCard
                  key={id}
                  title={title}
                  img={img}
                  imglow={imglow}
                  location={location}
                  country={country}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
