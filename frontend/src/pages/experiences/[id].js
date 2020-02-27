import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

const id = () => {
  const router = useRouter();

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
    </>
  );
};

export default id;
