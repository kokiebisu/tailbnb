import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

// Component
import { StayCard } from '../presentational/StayCard';
import { ShowAll } from '../ShowAll';

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

interface StayData {
  stays: Stay[];
}

interface Stay {
  id: string;
  host_is_superhost: string;
  country: string;
  name: string;
  price: number;
  reviews_per_month: number;
  picture_url: string;
}

export const Stay: any = () => {
  const { loading, error, data } = useQuery<StayData>(GET_STAYS);
  const [card, setCard] = useState<number>(0);

  const renderContent = (data: StayData, number: number) => {
    var content: any[] = [];

    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 md:w-1/3 lg:w-1/4 pb-5'>
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

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          data && (
            <>
              <Media
                queries={{ xs: '(min-width: 0px) and (max-width: 739px)' }}>
                {(matches) =>
                  matches.xs ? (setCard(1), renderContent(data, card)) : null
                }
              </Media>
              <Media
                queries={{
                  small: '(min-width: 740px) and (max-width: 987px)'
                }}>
                {(matches) =>
                  matches.small ? (setCard(1), renderContent(data, card)) : null
                }
              </Media>
              <Media
                queries={{
                  large: '(min-width: 988px) and (max-width: 1299px)'
                }}>
                {(matches) =>
                  matches.large ? (setCard(1), renderContent(data, card)) : null
                }
              </Media>
              <Media
                queries={{
                  xl: '(min-width: 1300px) and (max-width: 1529px)'
                }}>
                {(matches) =>
                  matches.xl ? (setCard(1), renderContent(data, card)) : null
                }
              </Media>
              <Media
                queries={{
                  xl: '(min-width: 1530px)'
                }}>
                {(matches) =>
                  matches.xl ? (setCard(8), renderContent(data, card)) : null
                }
              </Media>
            </>
          )
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
