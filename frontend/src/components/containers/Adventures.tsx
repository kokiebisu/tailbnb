import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

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

  const renderContent = (data: AdventureData, number: number) => {
    var content: any[] = [];

    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 pb-5'>
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
                <Media
                  key={1}
                  queries={{
                    xs: '(min-width: 0px) and (max-width: 739px)'
                  }}>
                  {(matches) =>
                    matches.xs ? (setCard(4), renderContent(data, card)) : null
                  }
                </Media>
                <Media
                  key={2}
                  queries={{
                    small: '(min-width: 740px) and (max-width: 987px)'
                  }}>
                  {(matches) =>
                    matches.small
                      ? (setCard(3), renderContent(data, card))
                      : null
                  }
                </Media>

                <Media
                  key={3}
                  queries={{
                    large: '(min-width: 988px) and (max-width: 1299px)'
                  }}>
                  {(matches) =>
                    matches.large
                      ? (setCard(3), renderContent(data, card))
                      : null
                  }
                </Media>

                <Media
                  key={4}
                  queries={{
                    xl: '(min-width: 1300px) and (max-width: 1529px)'
                  }}>
                  {(matches) =>
                    matches.xl ? (setCard(4), renderContent(data, card)) : null
                  }
                </Media>
                <Media
                  key={5}
                  queries={{
                    twoxl: '(min-width: 1530px)'
                  }}>
                  {(matches) =>
                    matches.twoxl
                      ? (setCard(6), renderContent(data, card))
                      : null
                  }
                </Media>
              </>
            )
          )}
        </div>

        <ShowAll title='Show all adventures' />
      </Section>
    </>
  );
};
