import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import axios from 'axios';

export default () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState({});

  const info = {
    page: 1,
    per_page: 10,
    query: 'home',
    client_id: 'RchVxgkvTlsApnvD7fdLAxFzqAa0yi6OPLS3pTWs3W4'
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=${info.page}&per_page=${info.per_page}&query=${info.query}&client_id=${info.client_id}`
      )
      .then((data) => {
        setPhotos({ imgs: data.data.results });
      });
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Vacation Rentals, Homes, Experiences & Places</title>

        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width '
        />
        <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
      </Head>
      <h1>Hello {router.query.id}</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className=''>
          {photos.imgs ? <img src={photos.imgs[1].urls.small} alt='' /> : null}
        </div>
      )}
    </>
  );
};
