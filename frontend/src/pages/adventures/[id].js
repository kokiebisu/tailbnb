import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

export default () => {
  const router = useRouter();
  return (
    <>
      <Head>
        {loading ? (
          <title>Vacation Rentals, Homes, Experiences & Places</title>
        ) : (
          <title>{data.stay.title}</title>
        )}

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
