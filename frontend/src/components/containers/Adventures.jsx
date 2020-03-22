import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import { withSize } from 'react-sizeme';

// Util
import { renderSkeletonVertical } from '../../util/RenderSkeleton';

// Component
import { AdventureCard } from '../functions/AdventureCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';

const GET_ADVENTURES = gql`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
    }
  }
`;

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='pb-5'>
        <AdventureCard
          key={i}
          id={data?.adventures[i].id}
          img={data?.adventures[i].img}
          country={data?.adventures[i].country}
          title={data?.adventures[i].title}
          cost={data?.adventures[i].cost}
          period={data?.adventures[i].period}
        />
      </div>
    );
  }
  return content;
};

// interface Adventure {
//   id: string;
//   title: string;
//   period: number;
//   cost: number;
//   country: string;
//   img: string;
// }

// interface AdventureData {
//   adventures: Adventure[];
// }

const Adventures = ({ size }) => {
  const { loading, error, data } = useQuery(GET_ADVENTURES);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Introducing Airbnb Adventures'
        phrase='Multi-day trips led by local experts—activities, meals, and stays
        included'>
        {loading ? (
          <>
            <div className='grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full'>
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
          </>
        ) : (
          <>
            {data && (
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
          </>
        )}
        <ShowAll title='Show all adventures' />
      </Section>
    </>
  );
};

export default withSize()(Adventures);
