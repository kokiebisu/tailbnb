import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

// Dependencies
import styled from 'styled-components';

// GraphQL
import { gql } from 'apollo-boost';

// Section
import Banner from './section/Banner';
import WhatYouDo from './section/WhatYouDo';
import Adventures from './section/Adventures';
import Included from './section/Included';
import Itinerary from './section/Itinerary';
import Host from './section/Host';
import Availability from './section/Availability';
import Reviews from './section/Reviews';
import Safety from './section/Safety';
import KeepInMind from './section/KeepInMind';

// Layout
import { ExploreHeader } from '../../components/layout/ExploreHeader';
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
      <WhatYouDo />
      <Adventures />
      <Included />
      <Itinerary />
      <Host />
      <Availability />
      <Reviews />
      <Safety />
      <KeepInMind />
      <div className='w-full flex justify-center'>
        <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
          <div
            style={{ fontFamily: 'airbnb-bold' }}
            className='w-full text-3xl text-gray-750 mb-8'>
            Keep exploring in Marrakech
          </div>
          <div className='w-full flex justify-start items-start flex-wrap'>
            <div className='w-23p bg-white shadow-sm rounded mr-4 border border-gray-300'>
              <div className='px-6 py-5'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750'>
                  Nature and outdoors
                </h3>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-xs text-gray-650'>
                  193 experiences
                </p>
              </div>
            </div>
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
