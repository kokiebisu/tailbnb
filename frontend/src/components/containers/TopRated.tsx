import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

// Components
import { TopRatedCard } from '../presentational/TopRatedCard';
import { ShowAll } from '../ShowAll';

const GET_EXPERIENCES = gql`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      ratings
      location
      imglow
      img
    }
  }
`;

interface Experience {
  id: string;
  title: string;
  cost: number;
  ratings: number;
  reviews: number;
  location: string;
  img: string;
}

interface ExperienceData {
  experiences: Experience[];
}

export const TopRated: any = () => {
  const { loading, error, data } = useQuery<ExperienceData>(GET_EXPERIENCES);
  const [card, setCard] = useState<number>(0);

  const renderContent = (data: Experience[], number: number) => {
    var content = [];
    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 pb-5'>
          <TopRatedCard
            key={data[i].id}
            id={data[i].id}
            img={data[i].img}
            title={data[i].title}
            cost={data[i].cost}
            ratings={data[i].ratings}
            reviews={data[i].reviews}
            location={data[i].location}
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
                  matches.xs
                    ? (setCard(4), renderContent(data.experiences, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  small: '(min-width: 740px) and (max-width: 987px)'
                }}>
                {(matches) =>
                  matches.small
                    ? (setCard(3), renderContent(data.experiences, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  large: '(min-width: 988px) and (max-width: 1299px)'
                }}>
                {(matches) =>
                  matches.large
                    ? (setCard(4), renderContent(data.experiences, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  xl: '(min-width: 1300px) and (max-width: 1529px)'
                }}>
                {(matches) =>
                  matches.xl
                    ? (setCard(5), renderContent(data.experiences, card))
                    : null
                }
              </Media>
              <Media
                queries={{
                  xl: '(min-width: 1530px)'
                }}>
                {(matches) =>
                  matches.xl
                    ? (setCard(6), renderContent(data.experiences, card))
                    : null
                }
              </Media>
            </>
          )
        )}
      </div>
      <ShowAll title='Show all experiences' />
    </>
  );
};
