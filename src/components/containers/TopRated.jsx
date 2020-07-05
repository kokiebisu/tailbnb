import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import withSize from 'react-sizeme';

// Utils
import { renderSkeletonVertical } from '../../util/RenderSkeleton';

// Components
import { TopRatedCard } from '../functions/TopRatedCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';

const GET_EXPERIENCES = gql`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      location
      img
    }
  }
`;

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='pb-5'>
        <TopRatedCard
          key={i}
          id={data?.experiences[i].id}
          img={data?.experiences[i].img}
          title={data?.experiences[i].title}
          cost={data?.experiences[i].cost}
          ratings={data?.experiences[i].ratings}
          reviews={data?.experiences[i].reviews}
          location={data?.experiences[i].location}
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
//   location: string;
//   img: string;
// }

// interface ExperienceData {
//   experiences: Experience[];
// }

export const TopRated = ({ size }) => {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Top-rated experiences'
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
          data && (
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
          )
        )}

        <ShowAll title='Show all experiences' />
      </Section>
    </>
  );
};

export default withSize()(TopRated);
