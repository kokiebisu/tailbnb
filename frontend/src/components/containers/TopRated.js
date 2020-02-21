import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from 'axios';

// Components
import TopRatedCard from '../presentational/TopRatedCard';
import ShowAll from '../ShowAll';

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
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState({});

  const info = {
    query: 'experience',
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
        `https://api.unsplash.com/photos/random?query=${info.query}&count=${info.count}&orientation=${info.orientation}&client_id=${info.client_id}`
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
        {data.experiences.map(
          ({ id, title, cost, reviews, ratings, location }, index) => {
            return (
              <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                {photos.imgs ? (
                  <TopRatedCard
                    key={id}
                    id={id}
                    img={photos.imgs[index].urls.full}
                    imglow={photos.imgs[index].urls.thumb}
                    title={title}
                    cost={cost}
                    ratings={ratings}
                    reviews={reviews}
                    location={location}
                  />
                ) : null}
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show all experiences' />
    </>
  );
};
