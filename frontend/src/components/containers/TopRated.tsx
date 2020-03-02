import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

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

  const renderContent = (data: ExperienceData, number: number) => {
    var content: any[] = [];

    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/6 pb-5'>
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

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Top-rated experiences'
        phrase='Book activities led by local hosts on your next trip.'>
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
                    matches.small
                      ? (setCard(1), renderContent(data, card))
                      : null
                  }
                </Media>
                <Media
                  queries={{
                    large: '(min-width: 988px) and (max-width: 1299px)'
                  }}>
                  {(matches) =>
                    matches.large
                      ? (setCard(4), renderContent(data, card))
                      : null
                  }
                </Media>
                <Media
                  queries={{
                    xl: '(min-width: 1300px) and (max-width: 1529px)'
                  }}>
                  {(matches) =>
                    matches.xl ? (setCard(4), renderContent(data, card)) : null
                  }
                </Media>
                <Media
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
        <ShowAll title='Show all experiences' />
      </Section>
    </>
  );
};
