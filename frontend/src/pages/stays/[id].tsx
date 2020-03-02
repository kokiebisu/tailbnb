import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import Head from 'next/head';

// Dependencies
// import styled from 'styled-components';

// GraphQL
import { gql } from 'apollo-boost';

// General
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { Footer } from '../../components/layout/Footer';

// Containers
import { Reviews } from '../../components/stays/containers/Reviews';
import { ToDoNear } from '../../components/stays/containers/ToDoNear';
import { MoreLocations } from '../../components/stays/containers/MoreLocations';
import { Amenities } from '../../components/stays/containers/Amenities';
import { PlaceInfo } from '../../components/stays/containers/PlaceInfo';
import { StayInfo } from '../../components/stays/containers/StayInfo';
import { MoreHomes } from '../../components/stays/containers/MoreHomes';
import { KeepInMind } from '../../components/stays/containers/KeepInMind';
import { Characteristics } from '../../components/stays/containers/Characteristics';
import { SleepingArrangements } from '../../components/stays/containers/SleepingArrangements';

// Functions
import { ImagePanel } from '../../components/stays/functions/ImagePanel';
import { MainInfo } from '../../components/stays/functions/MainInfo';
import { CheckInCard } from '../../components/stays/functions/CheckInCard';
import { HostedBy } from '../../components/stays/functions/HostedBy';

// Next
import { NextPage } from 'next';

// Images
const detail2 = require('../../../public/img/high/staydetail2.jpg');
const detail3 = require('../../../public/img/high/staydetail3.jpg');
const detail4 = require('../../../public/img/high/staydetail4.jpg');
const detail5 = require('../../../public/img/high/staydetail5.jpg');

const GET_STAY = gql`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      picture_url
      name
      street
      reviews_per_month
      number_of_reviews
      country
      size
      description
      space
      access
      notes
      host_name
      hostDescription
      host_since
      duringStay
      host_is_superhost
      host_thumbnail_url
      host_picture_url
      host_response_rate
      host_response_time
      accommodates
      beds
      bedrooms
      bathrooms
    }
  }
`;

const id: NextPage = () => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_STAY, {
    variables: {
      id: router.query.id
    }
  });
  const changeLength = () => {
    setLength(!length);
  };
  const [length, setLength] = useState<boolean>(false);
  return (
    <>
      <Head>
        {loading ? (
          <title>Vacation Rentals, Homes, Experiences & Places</title>
        ) : (
          data && <title>{data.stay.name}</title>
        )}

        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width '
        />
        <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
      </Head>
      <ExploreHeader type='stay' mode='white' />

      <div className='px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='w-full flex flex-col-reverse lg:flex-col'>
          {data && (
            <>
              <MainInfo data={data} />
              <ImagePanel
                img1={data.stay.picture_url}
                img2={detail2}
                img3={detail3}
                img4={detail4}
                img5={detail5}
              />
            </>
          )}
        </div>

        <div className='w-full lg:w-7/12 '>
          {data && (
            <>
              <PlaceInfo data={data} />
              <Characteristics
                host_is_superhost={data.stay.host_is_superhost}
                host_name={data.stay.host_name}
              />
            </>
          )}
          {data && <StayInfo data={data} setLength={changeLength} />}

          <SleepingArrangements />
          <Amenities />
        </div>
        {length ? (
          <CheckInCard length={length} loading={loading} />
        ) : (
          <CheckInCard length={length} loading={loading} />
        )}

        {data && (
          <>
            <Reviews
              reviews_per_month={data.stay.reviews_per_month}
              number_of_reviews={data.stay.number_of_reviews}
            />
            <HostedBy
              host_name={data.stay.host_name}
              hostDescription={data.stay.hostDescription}
              host_since={data.stay.host_since}
              duringStay={data.stay.duringStay}
              host_is_superhost={data.stay.host_is_superhost}
              reviews_per_month={data.stay.reviews_per_month}
              host_picture_url={data.stay.host_picture_url}
              host_thumbnail_url={data.stay.host_thumbnail_url}
              host_response_rate={data.stay.host_response_rate}
              host_response_time={data.stay.host_response_time}
            />
            <KeepInMind />
            <MoreHomes />
            <ToDoNear />
            <MoreLocations />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

// const SSkeletonPulse = styled.div`
//   display: inline-block;
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
//   background-size: 400% 400%;
//   @keyframes pulse {
//     0% {
//       background-position: 0% 0%;
//     }
//     100% {
//       background-position: -135% 0%;
//     }
//   }
// `;

// const SSkeletonPulse1 = styled(SSkeletonPulse)`
//   animation: pulse 1.2s ease-in-out infinite;
// `;

export default id;
