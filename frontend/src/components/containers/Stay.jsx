import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import withSizes from 'react-sizes';

// Component
import { StayCard } from '../functions/StayCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';
import cuid from 'cuid';

const GET_STAYS = gql`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
      picture_url
    }
  }
`;

// interface StayData {
//   stays: Stay[];
// }

// interface Stay {
//   id: string;
//   host_is_superhost: string;
//   country: string;
//   name: string;
//   price: number;
//   reviews_per_month: number;
//   picture_url: string;
// }

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
      <div className='w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
        <StayCard
          key={i}
          id={data?.stays[i].id}
          host_is_superhost={data?.stays[i].host_is_superhost}
          country={data?.stays[i].country}
          name={data?.stays[i].name}
          price={data?.stays[i].price}
          reviews_per_month={data?.stays[i].reviews_per_month}
          picture_url={data?.stays[i].picture_url}
        />
      </div>
    );
  }
  return content;
};

const Stay = ({ isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop }) => {
  const { loading, error, data } = useQuery(GET_STAYS);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section title='Places to stay around the world'>
        <div className='flex items-start justify-start flex-wrap w-full'>
          {loading ? (
            <div className='flex justify-center items-center w-full py-20'>
              <PulseLoader size={10} color={'#008489'} />
            </div>
          ) : (
            data && (
              <>
                {isMobile ? renderContent(data, 4) : null}
                {isTablet ? renderContent(data, 4) : null}
                {isLaptop ? renderContent(data, 6) : null}
                {isDesktop ? renderContent(data, 8) : null}
                {isLargeDesktop ? renderContent(data, 8) : null}
              </>
            )
          )}
        </div>

        <ShowAll title='Show(2000+)' />
      </Section>
    </>
  );
};

export default withSizes(mapSizesToProps)(Stay);
