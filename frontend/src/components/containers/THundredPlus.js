import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from 'axios';

// Component
import THundredPlusCard from '../presentational/THundredPlusCard';
import ShowAll from '../ShowAll';

const staydata = gql`
  query {
    stays {
      id
      host_is_superhost
      size
      country
      name
      price
      reviews_per_month
      number_of_reviews
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(staydata);

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState({});

  const info = {
    query: 'house',
    count: 4,
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
      <div className='flex flex-wrap items-start justify-start w-full'>
        {data.stays.map(
          (
            {
              id,
              host_is_superhost,
              img,
              imglow,
              size,
              country,
              name,
              price,
              reviews_per_month,
              number_of_reviews
            },
            index
          ) => {
            return (
              <div className='lg:w-1/3 xl:w-1/4 pb-5'>
                {photos.imgs ? (
                  <THundredPlusCard
                    key={id}
                    host_is_superhost={host_is_superhost}
                    img={photos.imgs[index].urls.regular}
                    imglow={photos.imgs[index].urls.thumb}
                    size={size}
                    country={country}
                    name={name}
                    price={price}
                    reviews_per_month={reviews_per_month}
                    number_of_reviews={number_of_reviews}
                  />
                ) : null}
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
