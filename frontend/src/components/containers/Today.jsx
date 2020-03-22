import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
// import withSizes from 'react-sizes';
import { withSize } from 'react-sizeme';

// Utils
import { renderSkeletonVertical } from '../../util/RenderSkeleton';

// Components
import { LocationExperienceCard } from '../functions/LocationExperienceCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';

const GET_LOCATION_EXPERIENCES = gql`
  query LocationExperiences($available: String, $location: String) {
    experiences(
      where: { available: $available, location: $location }
      first: 6
    ) {
      id
      title
      cost
      ratings
      reviews
      location
      img
      available
      category
    }
  }
`;

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='pb-5'>
        <LocationExperienceCard
          key={i}
          id={data?.experiences[i].id}
          img={data?.experiences[i].img}
          title={data?.experiences[i].title}
          cost={data?.experiences[i].cost}
          ratings={data?.experiences[i].ratings}
          reviews={data?.experiences[i].reviews}
          category={data?.experiences[i].category}
        />
      </div>
    );
  }
  return content;
};

// interface Experience {
//   id: string;
//   title: string;
//   cost: number;
//   ratings: number;
//   reviews: number;
//   category: string;
//   img: string;
// }

// interface ExperienceData {
//   experiences: Experience[];
// }

const Today = ({ size, location }) => {
  const { loading, error, data } = useQuery(GET_LOCATION_EXPERIENCES, {
    variables: {
      available: 'Today',
      location: location
    }
  });

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Today in Vancouver'
        phrase='Book activities led by local hosts on your next trip.'>
        {loading ? (
          <div className='grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full mb-24'>
            {size.width < 767 ? renderSkeletonVertical(4) : null}
            {size.width >= 767 && size.width < 1023
              ? renderSkeletonVertical(3)
              : null}
            {size.width >= 1023 && size.width < 1279
              ? renderSkeletonVertical(4)
              : null}
            {size.width >= 1279 && size.width < 1529
              ? renderSkeletonVertical(5)
              : null}
            {size.width >= 1529 ? renderSkeletonVertical(6) : null}
          </div>
        ) : (
          <div className='grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full'>
            {size.width < 767 ? renderContent(data, 4) : null}
            {size.width >= 767 && size.width < 1023
              ? renderContent(data, 3)
              : null}
            {size.width >= 1023 && size.width < 1279
              ? renderContent(data, 4)
              : null}
            {size.width >= 1279 && size.width < 1529
              ? renderContent(data, 5)
              : null}
            {size.width >= 1529 ? renderContent(data, 6) : null}
          </div>
        )}

        <ShowAll title='Show all experiences' />
      </Section>
    </>
  );
};

export default withSize()(Today);
