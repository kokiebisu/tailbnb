import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import withSizes from 'react-sizes';

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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 767,
  isTablet: width > 767 && width < 1023,
  isLaptop: width > 1023 && width < 1279,
  isDesktop: width > 1279 && width < 1529,
  isLargeDesktop: width > 1529
});

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 pb-5'>
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

const Adventures = ({
  isMobile,
  isTablet,
  isLaptop,
  isDesktop,
  isLargeDesktop
}) => {
  const { loading, error, data } = useQuery(GET_ADVENTURES);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Introducing Airbnb Adventures'
        phrase='Multi-day trips led by local experts—activities, meals, and stays
        included'>
        <div className='flex items-start justify-start flex-wrap w-full'>
          {loading ? (
            <div className='flex justify-center items-center w-full py-20'>
              <PulseLoader size={10} color={'#008489'} />
            </div>
          ) : (
            data && (
              <>
                {isMobile ? renderContent(data, 4) : null}
                {isTablet ? renderContent(data, 3) : null}
                {isLaptop ? renderContent(data, 4) : null}
                {isDesktop ? renderContent(data, 5) : null}
                {isLargeDesktop ? renderContent(data, 6) : null}
              </>
            )
          )}
        </div>

        <ShowAll title='Show all adventures' />
      </Section>
    </>
  );
};

export default withSizes(mapSizesToProps)(Adventures);
