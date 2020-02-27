import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

// Component
import { AdventureCard } from '../presentational/AdventureCard';
import { ShowAll } from '../ShowAll';

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

interface Adventure {
  id: string;
  title: string;
  period: number;
  cost: number;
  country: string;
  img: string;
}

interface AdventureData {
  adventures: Adventure[];
}

export const Adventures: any = () => {
  const { loading, error, data } = useQuery<AdventureData>(GET_ADVENTURES);
  const [card, setCard] = useState<number>(0);

  const renderContent = (data: Adventure[], number: number) => {
    var content = [];
    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5'>
          <AdventureCard
            key={data[i].id}
            id={data[i].id}
            img={data[i].img}
            country={data[i].country}
            title={data[i].title}
            cost={data[i].cost}
            period={data[i].period}
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
                queries={{ small: '(min-width: 0px) and (max-width: 640px)' }}>
                {(matches) =>
                  matches.small
                    ? (setCard(4), renderContent(data.adventures, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  large: '(min-width: 641px) and (max-width: 767px)'
                }}>
                {(matches) =>
                  matches.large
                    ? (setCard(3), renderContent(data.adventures, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  xl: '(min-width: 768px) and (max-width: 1023px)'
                }}>
                {(matches) =>
                  matches.xl
                    ? (setCard(5), renderContent(data.adventures, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  twoxl: '(min-width: 1024px)'
                }}>
                {(matches) =>
                  matches.twoxl
                    ? (setCard(6), renderContent(data.adventures, card))
                    : null
                }
              </Media>
            </>
          )
        )}
      </div>

      <ShowAll title='Show all adventures' />
    </>
  );
};
