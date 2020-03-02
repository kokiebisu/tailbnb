import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

// GraphQL
import { gql } from 'apollo-boost';

// Section
import { Banner } from '../../components/adventures/containers/Banner';
import { WhatYouDo } from '../../components/adventures/containers/WhatYouDo';
import { Adventures } from '../../components/adventures/containers/Adventures';
import { Included } from '../../components/adventures/containers/Included';
import { Itinerary } from '../../components/adventures/containers/Itinerary';
import { Host } from '../../components/adventures/containers/Host';
import { Availability } from '../../components/adventures/containers/Availability';
import { Reviews } from '../../components/adventures/containers/Reviews';
import { Safety } from '../../components/adventures/containers/Safety';
import { KeepInMind } from '../../components/adventures/containers/KeepInMind';
import { KeepExploring } from '../../components/adventures/containers/KeepExploring';

// Layout
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { Footer } from '../../components/layout/Footer';

const GET_ADVENTURE = gql`
  query Adventure($id: ID!) {
    adventure(where: { id: $id }) {
      title
      period
      cost
      country
      img
    }
  }
`;

export default () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  });

  if (error) return `error: ${error}`;

  return (
    <>
      <Head>
        {loading ? (
          <title>Vacation Rentals, Homes, Experiences & Places</title>
        ) : (
          data && <title>{data.adventure.name}</title>
        )}

        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width '
        />
        <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
      </Head>
      <ExploreHeader type='stay' mode='dark' />
      <Banner />
      <WhatYouDo />
      <Adventures />
      <Included />
      <Itinerary />
      <Host />
      <Availability />
      <Reviews />
      <Safety />
      <KeepInMind />
      <KeepExploring />
      <Footer />
    </>
  );
};
