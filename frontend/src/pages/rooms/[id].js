import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
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

const staydata = gql`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;

export default () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(staydata, {
    variables: {
      id: router.query.id
    }
  });

  if (loading) return 'loading...';
  if (error) return 'error...';
  return (
    <>
      <ExploreHeader />
      <ImagePanel
        img1={detail1}
        img2={detail2}
        img3={detail3}
        img4={detail4}
        img5={detail5}
      />
      <div className='px-5 md:px-10 lg:max-w-4xl xl:max-w-5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='w-7/12 '>
          <div className='flex items-start justify-between border-b border-gray-200'>
            <div>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-3xl text-gray-750 font-semibold leading-none'>
                Douro Villa with swimming pool, Penafiel, Portugal
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 py-3'>
                Penafiel
              </p>
              <div
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 pb-3 flex justify-start items-start flex-wrap'>
                <div className='mr-4'>
                  <p>9 guests</p>
                </div>
                <div className='mr-4'>
                  <p>4 bedrooms</p>
                </div>
                <div className='mr-4'>
                  <p>9 beds</p>
                </div>
                <div className='mr-4'>
                  <p>3 baths</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <div className='flex justify-center w-full'>
                <img className='h-16 w-16 rounded-full' src={detail1} />
              </div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='mt-2 text-gray-650 text-center text-sm leading-snug'>
                Maria Henriqueta
              </p>
            </div>
          </div>
          <div className='my-6 border-b border-gray-300'>
            <Characteristics />
          </div>
          <div className='border-b border-gray-300'>
            <div className='my-8'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750'>
                We invite you to come and visit our beautiful countryside hourse
                on the shores of the Douro river. You will have a full
                countryside experience with our restored rustic ouse, our farm
                animals, a salt water 12 meter pool and a unique view for the
                unforgettable landscape of the Douro river.
              </p>
              <div className='my-5'>
                <button>
                  <div className='flex items-center justify-start'>
                    <p
                      className='text-green-850 hover:border-green-850 border-b text-green-850 border-transparent'
                      style={{ fontFamily: 'airbnb-medium' }}>
                      Read more about the space
                    </p>
                    <div className='ml-3'>
                      <svg
                        style={{ fill: '#008489' }}
                        viewBox='0 0 18 18'
                        className='h-2 w-2'>
                        <path d='m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z' />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <a
                  className='hover:border-green-850 border-b text-green-850 border-transparent'
                  style={{ fontFamily: 'airbnb-medium' }}
                  href=''>
                  Contact host
                </a>
              </div>
            </div>
          </div>
          <DetailSection title='Amenities'>
            <div className='flex items-start justify-start flex-wrap'>
              <AmenityCard type='wifi' title='Wifi' />
              <AmenityCard type='laptop' title='Laptop-friendly workspace' />
              <AmenityCard type='kitchen' title='Kitchen' />
              <AmenityCard type='iron' title='Iron' />
            </div>
            <p className='text-xs text-gray-750 pt-6 pb-3'>
              The host hasn't reported smoke or carbon monoxide detectors on the
              property
            </p>
            <a
              style={{ fontFamily: 'airbnb-medium' }}
              className='hover:border-green-850 border-b text-green-850 border-transparent'>
              Show all 32 amenities
            </a>
          </DetailSection>
          <DetailSection title='Sleeping arrangements'>
            <div className='flex items-start justify-between my-6'>
              <div className='pr-10 pl-2 border border-gray-300'>
                <SleepingArrangmentsCard />
              </div>
              <div className='pr-10 pl-2 border border-gray-300'>
                <SleepingArrangmentsCard />
              </div>
              <div className='pr-10 pl-2 border border-gray-300'>
                <SleepingArrangmentsCard />
              </div>
            </div>
          </DetailSection>
          <DetailSection title='Availability'>
            <p>Enter your trip dates for accurate pricing and availability</p>
            <div className='w-full h-64 bg-blue-500'></div>
          </DetailSection>
          <Reviews />
          <HostedBy />
          <Neighborhood />
          <KeepInMind />
        </div>
        <div className='ml-5 w-4/12 bg-blue-500'>what</div>
        <Section title='More homes you may like'>
          <MoreHomes />
        </Section>
        <Section title='Things to do near this home'>
          <TodoNear />
        </Section>
        <Section
          title='Explore other options in and around Penafiel'
          phrase='More place to stay in Penafiel: Apartments<span> . </span>Bed and
              breakfasts'>
          <MoreLocations />
        </Section>
      </div>
      <Footer />
    </>
  );
};