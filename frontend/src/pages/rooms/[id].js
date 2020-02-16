import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

// Loading
import Skeleton from 'react-loading-skeleton';
import PulseLoader from 'react-spinners/PulseLoader';

// GraphQL
import { gql } from 'apollo-boost';

// Components
import ExploreHeader from '../../components/layout/ExploreHeader';
import ImagePanel from '../../components/presentational/ImagePanel';
import HeaderCard from '../../components/presentational/HeaderCard';
import DetailSection from '../../components/wrapper/DetailSection';
import Reviews from '../../components/containers/Reviews';
import Footer from '../../components/layout/Footer';
import HostedBy from '../../components/containers/HostedBy';
import Neighborhood from '../../components/containers/Neighborhood';
import KeepInMind from '../../components/containers/KeepInMind';
import MoreHomes from '../../components/containers/MoreHomes';
import Characteristics from '../../components/containers/Characteristics';
import SleepingArrangmentsCard from '../../components/presentational/SleepingArrangmentsCard';
import Cancellations from '../../components/presentational/Cancellations';
import CheckInCard from '../../components/presentational/CheckInCard';

// Wrapper
import Section from '../../components/wrapper/Section';

// Containers
import TodoNear from '../../components/containers/ToDoNear';
import MoreLocations from '../../components/containers/MoreLocations';

// Images
import detail1 from '../../../public/img/high/staydetail1.jpg';
import detail2 from '../../../public/img/high/staydetail2.jpg';
import detail3 from '../../../public/img/high/staydetail3.jpg';
import detail4 from '../../../public/img/high/staydetail4.jpg';
import detail5 from '../../../public/img/high/staydetail5.jpg';
import AmenityCard from '../../components/presentational/AmenityCard';

const GET_STAY = gql`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      title
      location
      ratings
    }
  }
`;

export default () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_STAY, {
    variables: {
      id: router.query.id
    },
    pollInterval: 5000
  });

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
      <ExploreHeader />

      <div className='px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='w-full py-5'>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-3xl text-gray-850'>
            Radiant Apartment with Terrace in Roma Norte (1/4)
          </h3>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start flex-wrap'>
              <div>
                <svg
                  style={{ fill: '#E61E4D', marginBottom: 1 }}
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3 w-3'
                  viewBox='0 0 37.286 37.287'>
                  <g>
                    <path
                      d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
    c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
    c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
    c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
    c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
    C37.425,15.013,37.226,15.808,36.683,16.339z'
                    />
                  </g>
                </svg>
              </div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-1 text-gray-650 text-sm'>
                4.81 (387)
              </p>
              <span> . </span>
              <div>svg here</div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-1 text-gray-650 text-sm'>
                Superhost
              </p>
              <span> . </span>
              <a
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-sm text-gray-650 underline'
                href=''>
                Mexico City, Federal District, Mexico
              </a>
            </div>
            <div className='flex items-center justify-start'>
              <div className='flex items-center justify-start'>
                <div>svg here</div>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='pl-1 text-sm text-gray-850 underline'>
                  Share
                </p>
              </div>
              <div className='flex items-center justify-start'>
                <div>svg here</div>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='pl-1 text-sm text-gray-850 underline'>
                  Share
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <ImagePanel
            img1={detail1}
            img2={detail2}
            img3={detail3}
            img4={detail4}
            img5={detail5}
            loading={loading}
          />
        </div>

        <div className='w-7/12 '>
          <div className='flex items-center justify-between border-b border-gray-200 mt-4'>
            <div className='py-4'>
              <div className='mt-4 flex items-start justify-center'>
                <div className='flex flex-col '>
                  {loading ? (
                    <Skeleton width={60} />
                  ) : (
                    <h3
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-2xl text-gray-850 font-semibold leading-none'>
                      {data.stay.title}
                    </h3>
                  )}

                  <div
                    style={{ fontFamily: 'airbnb-book' }}
                    className='text-gray-750 pb-3 flex justify-start items-start flex-wrap'>
                    <div className='mr-4'>
                      {loading ? <Skeleton width={60} /> : <p>9 guests</p>}
                    </div>
                    <div className='mr-4'>
                      {loading ? <Skeleton width={60} /> : <p>4 bedrooms</p>}
                    </div>
                    <div className='mr-4'>
                      {loading ? <Skeleton width={60} /> : <p>9 beds</p>}
                    </div>
                    <div className='mr-4'>
                      {loading ? <Skeleton width={60} /> : <p>3 baths</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-start'>
              <div className='flex justify-center w-full'>
                <img className='h-14 w-14 rounded-full' src={detail1} />
              </div>
            </div>
          </div>
          <div className='my-6 border-b border-gray-300'>
            <Characteristics />
          </div>
          {loading ? (
            <div className='flex justify-center items-center w-full py-20'>
              <PulseLoader size={10} color={'#008489'} />
            </div>
          ) : (
            <>
              <div className='border-b border-gray-300'>
                <div className='my-8'>
                  <p
                    style={{ fontFamily: 'airbnb-book' }}
                    className='text-gray-750'>
                    We invite you to come and visit our beautiful countryside
                    hourse on the shores of the Douro river. You will have a
                    full countryside experience with our restored rustic ouse,
                    our farm animals, a salt water 12 meter pool and a unique
                    view for the unforgettable landscape of the Douro river.
                  </p>
                  <div className='my-5'>
                    <button>
                      <div className='flex items-center justify-start'>
                        <p className='' style={{ fontFamily: 'airbnb-medium' }}>
                          Any questions for the host?
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className='mt-10 mb-16'>
                    <a
                      className='py-3 px-6 border border-black rounded-lg'
                      style={{ fontFamily: 'airbnb-medium' }}
                      href=''>
                      Contact host
                    </a>
                  </div>
                </div>
              </div>
              <DetailSection title='Sleeping arrangements'>
                <div className='flex items-start justify-start my-6'>
                  <div className='mr-4 w-1/3 border border-gray-300 rounded-xl flex justify-start'>
                    <SleepingArrangmentsCard />
                  </div>
                  <div className='mr-4 w-1/3 border border-gray-300 rounded-xl'>
                    <SleepingArrangmentsCard />
                  </div>
                </div>
              </DetailSection>
              <DetailSection title='Amenities'>
                <div className='flex items-start justify-start flex-wrap'>
                  <AmenityCard type='wifi' title='Wifi' />
                  <AmenityCard
                    type='laptop'
                    title='Laptop-friendly workspace'
                  />
                  <AmenityCard type='kitchen' title='Kitchen' />
                  <AmenityCard type='iron' title='Iron' />
                </div>
                <div className='mt-10 mb-8'>
                  <a
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='py-3 px-6 rounded-xl border border-black '>
                    Show all 32 amenities
                  </a>
                </div>
              </DetailSection>
            </>
          )}
        </div>
        <div className='w-5/12 flex justify-center mt-10'>
          <div className='w-25/31 flex flex-col justify-start items-center'>
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full py-5 text-2xl text-gray-850'>
              Add dates for prices
            </h3>
            <button
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full bg-pink-850 text-white rounded-lg py-3'>
              Check availability
            </button>
          </div>
        </div>
        {loading ? null : (
          <>
            <Reviews ratings={data.stay.ratings} />
            <HostedBy />
            <KeepInMind />
            <DetailSection title='More places to stay'>
              <MoreHomes />
            </DetailSection>
            <DetailSection title='Things to do nearby'>
              <TodoNear />
            </DetailSection>
            <DetailSection title='Explore other options in and around Penafiel'>
              <MoreLocations />
            </DetailSection>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
