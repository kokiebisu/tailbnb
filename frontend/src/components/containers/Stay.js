import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

const GET_STAYS = gql`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
    }
  }
`;

// Component
import StayCard from '../presentational/StayCard';
import ShowAll from '../ShowAll';

export default () => {
  const { loading, error, data } = useQuery(GET_STAYS);

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState({});

  const info = {
    query: 'home',
    count: 1,
    orientation: 'landscape',
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

  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          data.stays.map(
            (
              {
                id,
                host_is_superhost,
                country,
                name,
                price,
                reviews_per_month
              },
              index
            ) => {
              return (
                <div className='w-1/2 lg:w-1/3 xl:w-1/4 pb-5'>
                  {photos.imgs ? (
                    <StayCard
                      key={id}
                      id={id}
                      host_is_superhost={host_is_superhost}
                      country={country}
                      name={name}
                      price={price}
                      reviews_per_month={reviews_per_month}
                      img={photos.imgs[index].urls.regular}
                      imglow={photos.imgs[index].urls.thumb}
                    />
                  ) : null}
                </div>
              );
            }
          )
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
