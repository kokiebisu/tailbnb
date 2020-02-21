import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from 'axios';

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

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState({});

  const info = {
    query: 'adventure',
    count: 4,
    orientation: 'portrait',
    client_id: 'RchVxgkvTlsApnvD7fdLAxFzqAa0yi6OPLS3pTWs3W4'
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?h=140&query=${info.query}&count=${info.count}&orientation=${info.orientation}&client_id=${info.client_id}`
      )
      .then((data) => {
        setPhotos({ imgs: data.data });
      });
    setIsLoading(false);
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
        {data.adventures.map(({ id, country, title, cost, period }, index) => {
          return (
            <div className='lg:w-1/4 md:w-1/3 w-1/2 pb-5'>
              {photos.imgs ? (
                <AdventureCard
                  key={id}
                  id={id}
                  img={photos.imgs[index].urls.regular}
                  imglow={photos.imgs[index].urls.thumb}
                  country={country}
                  title={title}
                  cost={cost}
                  period={period}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <ShowAll title='Show all adventures' />
    </>
  );
};
