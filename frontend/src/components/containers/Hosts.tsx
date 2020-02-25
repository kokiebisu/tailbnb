import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Components
import { TopRatedCard } from '../presentational/TopRatedCard';
import { HostCard } from '../presentational/HostCard';

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

interface Experience {
  id: string;
  title: string;
  location: string;
  country: string;
  img: string;
  imglow: string;
}

interface ExperienceData {
  experiences: Experience[];
}

export const Hosts: () => string | JSX.Element = () => {
  const { loading, error, data } = useQuery<ExperienceData>(experiencedata, {
    pollInterval: 9000
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center w-full py-20'>
          <PulseLoader size={10} color={'#008489'} />
        </div>
      ) : (
        <div className='flex items-start justify-start flex-wrap w-full'>
          {data &&
            data.experiences.map(({ id, title, location, country, img }) => {
              return (
                <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                  <HostCard
                    key={id}
                    title={title}
                    img={img}
                    location={location}
                    country={country}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
