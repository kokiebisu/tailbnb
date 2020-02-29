import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

// Dependencies
import styled from 'styled-components';

// GraphQL
import { gql } from 'apollo-boost';

// Components
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import Banner from './functions/Banner';

import { Footer } from '../../components/layout/Footer';

// Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';
const detail2 = require('../../../public/img/high/staydetail2.jpg');
const detail3 = require('../../../public/img/high/staydetail3.jpg');
const detail4 = require('../../../public/img/high/staydetail4.jpg');
const detail5 = require('../../../public/img/high/staydetail5.jpg');

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

const id = () => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  });
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
      <div className='w-full flex justify-center'>
        <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
          <div
            style={{ fontFamily: 'airbnb-bold' }}
            className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
            What you'll do
          </div>
          <div
            style={{ fontFamily: 'airbnb-book' }}
            className='w-full md:w-8/12 px-4 text-gray-750 text-lg '>
            <p className='mb-7'>
              Leave early from Marrakech and head to the Tinzert & Ouirgane for
              a 2 days Trek the village is Tucked in the mystical and peaceful
              foothills of the High Atlas Mountains, in the heart of the
              majestic Toubkal National Park lays the picturesque village of
              Ouirgane.
            </p>
            <p className='mb-7'>
              Spectacular views of the Toubkal mountain range await all trekkers
              who take the time to discover this magical land. Be welcomed by
              the Berber locals and discover true Moroccan hospitality as you
              step into a world not your own. Perfect for individuals and
              families alike this trek will be sure to delight the senses and
              cultivate unforgettable moments and memories.
            </p>
            <p className='mb-7'>
              During the two days trek you will get the chance to learn howto
              cook certain dishes in addition to tea making ceremony
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonPulse1 = styled(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;

export default id;
