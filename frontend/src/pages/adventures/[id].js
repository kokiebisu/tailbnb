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
      <div className='w-full flex justify-center'>
        <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
          <div
            style={{ fontFamily: 'airbnb-bold' }}
            className='w-full md:w-4/12 h-full text-3xl text-gray-750'>
            Your itinerary
          </div>
          <div className='w-full md:w-8/12 relative'>
            <div
              style={{ height: 7, width: 7, top: -7, left: -3.5 }}
              className='absolute'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              style={{ height: 7, width: 7, bottom: -7, left: -3.5 }}
              className='absolute'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='px-5 text-gray-750 border-l border-gray-800'>
              <p className='mb-2'>Day 1</p>
              <div className='w-full flex justify-start items-start pb-8'>
                <div className='w-5/12'>
                  <img className='h-full w-full' src={detail2} alt='' />
                </div>

                <div className='w-7/12 pl-5'>
                  <p
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-base'>
                    Marrakech-Oughla - Tinzerte
                  </p>
                  <p className='text-base'>
                    Marrakech to imi oughlad small village situated 1,450m at
                    the base of Toubkal. Here we begin the gentle accent.
                  </p>
                  <button
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-green-850 text-sm mt-4'>
                    Show more
                  </button>
                </div>
              </div>
              <div>Day 2</div>
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
