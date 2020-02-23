import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

// Component
import AdventureCard from '../presentational/AdventureCard';
import ShowAll from '../ShowAll';

const GET_ADVENTURES = gql`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
      imglow
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_ADVENTURES);
  const [card, setCard] = useState(0);

  const renderContent = (data, number) => {
    var content = [];
    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5'>
          <AdventureCard
            key={data[i].id}
            id={data[i].id}
            img={data[i].img}
            imglow={data[i].imglow}
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

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full py-20'>
        <PulseLoader size={10} color={'#008489'} />
      </div>
    );
  }

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {data ? (
          <>
            <Media queries={{ small: '(max-width: 987px)' }}>
              {(matches) =>
                matches.small
                  ? (setCard(4), renderContent(data.adventures, card))
                  : null
              }
            </Media>
            <Media
              queries={{
                large: '(min-width: 988px) and (max-width: 1299px)'
              }}>
              {(matches) =>
                matches.large
                  ? (setCard(4), renderContent(data.adventures, card))
                  : null
              }
            </Media>
            <Media
              queries={{
                xl: '(min-width: 1300px) and (max-width: 1529px)'
              }}>
              {(matches) =>
                matches.xl
                  ? (setCard(5), renderContent(data.adventures, card))
                  : null
              }
            </Media>
            <Media
              queries={{
                xl: '(min-width: 1530px)'
              }}>
              {(matches) =>
                matches.xl
                  ? (setCard(6), renderContent(data.adventures, card))
                  : null
              }
            </Media>
          </>
        ) : null}
      </div>

      <ShowAll title='Show all adventures' />
    </>
  );
};
