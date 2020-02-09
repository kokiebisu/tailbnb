import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Component
import AdventureCard from '../cards/AdventureCard';
import ShowAll from '../ShowAll';

// Images
// High Resolution
import img1 from '../../../public/img/high/adventures1.jpg';
import img2 from '../../../public/img/high/adventures2.jpg';
import img3 from '../../../public/img/high/adventures3.jpg';
import img4 from '../../../public/img/high/adventures4.jpg';

// Low Resolution
import img1low from '../../../public/img/low/adventures1-low.jpg';
import img2low from '../../../public/img/low/adventures2-low.jpg';
import img3low from '../../../public/img/low/adventures3-low.jpg';
import img4low from '../../../public/img/low/adventures4-low.jpg';

const adventuredata = gql`
  query {
    adventures {
      id
      title
      period
      cost
      country
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(adventuredata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        {data.adventures.map(({ id, country, title, cost, period }) => {
          return (
            <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
              <AdventureCard
                key={id}
                img={img1}
                imglow={img1low}
                country={country}
                title={title}
                cost={cost}
                period={period}
              />
            </div>
          );
        })}
      </div>
      <ShowAll title='Show all adventures' />
    </>
  );
};
