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
              <div className='py-1 bg-blue-500 w-1/2'>Free parking</div>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
            </div>
            <p>
              The host hasn't reported smoke or carbon monoxide detectors on the
              property
            </p>
            <a className='text-green-600'>Show all 32 amenities</a>
          </DetailSection>
          <DetailSection title='Sleeping arrangements'>
            <div className='flex items-start justify-between my-6'>
              <div className='p-4 border border-gray-500'>
                <div className='p-4 border border-gray-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 480 480'
                    className='h-6 w-6'>
                    <g>
                      <g>
                        <path
                          d='M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328
			c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16
			H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672
			C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112
			c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8
			v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16
			s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368
			v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16
			c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64
			c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64
			c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16
			c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z
			 M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z
			 M464,384H16v-96h448V384z'
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z' />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z' />
                      </g>
                    </g>
                  </svg>
                  <p>Bedroom 1</p>
                  <p>1 double bed</p>
                </div>
              </div>
              <div className='p-4 border border-gray-500'>
                <div className='p-4 border border-gray-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 480 480'
                    className='h-6 w-6'>
                    <g>
                      <g>
                        <path
                          d='M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328
			c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16
			H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672
			C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112
			c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8
			v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16
			s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368
			v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16
			c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64
			c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64
			c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16
			c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z
			 M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z
			 M464,384H16v-96h448V384z'
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z' />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z' />
                      </g>
                    </g>
                  </svg>
                  <p>Bedroom 1</p>
                  <p>1 double bed</p>
                </div>
              </div>
              <div className='p-4 border border-gray-500'>
                <div className='p-4 border border-gray-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 480 480'
                    className='h-6 w-6'>
                    <g>
                      <g>
                        <path
                          d='M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328
			c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16
			H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672
			C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112
			c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8
			v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16
			s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368
			v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16
			c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64
			c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64
			c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16
			c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z
			 M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z
			 M464,384H16v-96h448V384z'
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z' />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d='M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z' />
                      </g>
                    </g>
                  </svg>
                  <p>Bedroom 1</p>
                  <p>1 double bed</p>
                </div>
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
