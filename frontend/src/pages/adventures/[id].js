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
import WhatYouDo from './section/WhatYouDo';
import Adventures from './section/Adventures';
import Included from './section/Included';
import Itinerary from './section/Itinerary';
import Host from './section/Host';

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
      <div className='w-full flex justify-center'>
        <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
          <div
            style={{ fontFamily: 'airbnb-bold' }}
            className='w-full text-3xl text-gray-750 mb-8'>
            Availability
          </div>
          <div className='w-full flex justify-start items-start flex-wrap'>
            <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
              <div className='m-8'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-gray-750 text-2xl py-1'>
                  Mar 03
                </h3>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  Tuesday
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  From $130/person
                </p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 mt-8'>
                  Book
                </button>
              </div>
            </div>
            <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
              <div className='m-8'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-gray-750 text-2xl py-1'>
                  Mar 03
                </h3>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  Tuesday
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  From $130/person
                </p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 mt-8'>
                  Book
                </button>
              </div>
            </div>
            <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
              <div className='m-8'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-gray-750 text-2xl py-1'>
                  Mar 03
                </h3>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  Tuesday
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  From $130/person
                </p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 mt-8'>
                  Book
                </button>
              </div>
            </div>
            <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
              <div className='m-8'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-gray-750 text-2xl py-1'>
                  Mar 03
                </h3>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  Tuesday
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  From $130/person
                </p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 mt-8'>
                  Book
                </button>
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
