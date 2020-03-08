import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import Media from 'react-media';

// Components
import { LocationExperienceCard } from '../functions/LocationExperienceCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';

const GET_LOCATION_EXPERIENCES = gql`
  query LocationExperiences($available: String) {
    experiences(where: { available: $available }) {
      id
      title
      cost
      ratings
      reviews
      location
      img
      available
      category
    }
  }
`;

interface Experience {
  id: string;
  title: string;
  cost: number;
  ratings: number;
  reviews: number;
  category: string;
  img: string;
}

interface ExperienceData {
  experiences: Experience[];
}

export const NextWeek: any = () => {
  const { loading, error, data } = useQuery<ExperienceData>(
    GET_LOCATION_EXPERIENCES,
    {
      variables: {
        available: 'Next Week'
      }
    }
  );
  const [card, setCard] = useState<number>(0);

  if (data) {
    console.log(data);
  }

  const renderContent = (data: ExperienceData, number: number) => {
    var content = [];

    for (let i = 0; i < number; i++) {
      content.push(
        <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 pb-5'>
          <LocationExperienceCard
            key={i}
            id={data?.experiences[i].id}
            img={data?.experiences[i].img}
            title={data?.experiences[i].title}
            cost={data?.experiences[i].cost}
            ratings={data?.experiences[i].ratings}
            reviews={data?.experiences[i].reviews}
            category={data?.experiences[i].category}
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
        title='Next Week in Vancouver'
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
                    matches.xs ? (setCard(4), renderContent(data, card)) : null
                  }
                </Media>
                <Media
                  queries={{
                    small: '(min-width: 740px) and (max-width: 987px)'
                  }}>
                  {(matches) =>
                    matches.small
                      ? (setCard(4), renderContent(data, card))
                      : null
                  }
                </Media>
                <Media
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
