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
      <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='w-4/6 '>
          <div className='flex items-start justify-between border-b border-gray-200'>
            <div>
              <h3 className='text-3xl font-semibold'>
                Douro Villa with swimming pool, Penafiel, Portugal
              </h3>
              <p>Penafiel</p>
              <div className='flex justify-start items-start flex-wrap'>
                <div className='mr-4'>
                  <p>9 guests</p>
                </div>
                <div className='mr-4'>
                  <p>9 guests</p>
                </div>
                <div className='mr-4'>
                  <p>9 guests</p>
                </div>
                <div className='mr-4'>
                  <p>9 guests</p>
                </div>
              </div>
            </div>
            <div className=''>
              <img className='h-12 w-12 rounded-full' src={detail1} />
              <p>Maria Henriqueta</p>
            </div>
          </div>
          <div className='my-6 border-b border-gray-300'>
            <div className='flex items-start justify-start'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 512.001 512.001'>
                  <g>
                    <g>
                      <path
                        d='M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
			c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
			c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
			c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
			c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z'
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d='M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z' />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h3>Entire home</h3>
                <p>You'll have the house to yourself.</p>
              </div>
            </div>
            <div className='flex items-start justify-start'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 512 512'>
                  <g>
                    <g>
                      <path
                        d='M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696
			v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783
			c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783
			c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564
			c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087
			v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043
			c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587
			c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696
			c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696
			h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z'
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h3>Entire home</h3>
                <p>You'll have the house to yourself.</p>
              </div>
            </div>
            <div className='flex items-start justify-start'>
              <div>
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 511.999 511.999'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clip-rule='evenodd' fill-rule='evenodd'>
                    <path d='m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z' />
                    <path d='m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z' />
                    <path d='m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z' />
                    <path d='m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z' />
                  </g>
                </svg>
              </div>
              <div>
                <h3>Entire home</h3>
                <p>You'll have the house to yourself.</p>
              </div>
            </div>
            <div className='flex items-start justify-start'>
              <div>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <g>
                    <g>
                      <path
                        d='M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
			c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z'
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h3>Entire home</h3>
                <p>You'll have the house to yourself.</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300'>
            <div className='flex items-center justify-center flex-wrap rounded-lg py-1 border border-gray-800'>
              <p>Translate this description to English (Canada)</p>
            </div>
            <div>
              <p>
                We invite you to come and visit our beautiful countryside hourse
                on the shores of the Douro river. You will have a full
                countryside experience with our restored rustic ouse, our farm
                animals, a salt water 12 meter pool and a unique view for the
                unforgettable landscape of the Douro river.
              </p>
            </div>
            <div className='flex items-start justify-start'>
              <button>Read more about the space</button>
              <svg viewBox='0 0 18 18' className='h-6 w-6'>
                <path d='m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z' />
              </svg>
            </div>
            <div>
              <a href=''>Contact host</a>
            </div>
          </div>
          <DetailSection title='Amenities'>
            <div className='flex items-start justify-start flex-wrap'>
              <div className='bg-blue-500 w-1/2'>Free parking</div>
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
        <div className='bg-blue-500'>what</div>
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
