import React from 'react';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import window from 'global';
import { renderSkeletonThreeColumn } from '../../util/RenderSkeleton';
import { FeaturedCard } from '../functions/FeaturedCard';

import styled from 'styled-components';

import Arrow from '../functions/Arrow';

import { CarouselCard } from '../functions/CarouselCard';

import { withSize } from 'react-sizeme';

import { ThreeColumnCard } from '../functions/ThreeColumnCard';

import { SectionOverflow } from '../wrapper/SectionOverflow';

const featureds = [
  {
    index: 0,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/e8afe40c-86e0-4064-8f98-7a742728f266.jpg',
    location: 'Cape Town',
    verified: 940,
    description:
      'Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.',
    type: 1,
    color: '#268cff'
  },
  {
    index: 1,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/afd64fec-14ea-4dbe-9f20-a5b8ee660535.jpg',
    location: 'Sydney',
    verified: 390,
    description:
      'Browse verified places to stay with artful style, in a city that wows from beach to bushland.',
    type: 2,
    color: '#fa7921'
  },
  {
    index: 2,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/7ed333a6-a2a3-4d02-bd86-022291fd3be4.jpg',
    location: 'Chicago',
    verified: 210,
    description:
      "Explore Chicago's stunning architecture from the inside-in homes verified for quality and design.",
    type: 3,
    color: '#fe9920'
  },
  {
    index: 3,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/2e5b5fcf-df39-4486-a6a7-c1fc0c5790bc.jpg',
    location: 'San Francisco',
    verified: 290,
    description:
      'Discover Victorian flats, SoMa lofts,, and more verified places to stay in a city where invention meets counterculture.',
    type: 4,
    color: '#50c878'
  },
  {
    index: 4,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/f8dd8070-c548-4a2b-bdb1-2b191395f8fa.jpg',
    location: 'Austin',
    verified: 400,
    description:
      'Come for the music, stay for the BBQ, and rest easy in places to stay verified for quality and comfort.',
    type: 5,
    color: '#47315b'
  },
  {
    index: 5,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/17c76104-0a61-4e32-b9e4-dcf99f1f9237.jpg',
    location: 'Melbourne',
    verified: 440,
    description:
      'Book sunny lofts, beachfront flats, and more verified places to stay in a city with world-class coffee and street art.',
    type: 6,
    color: '#c64971'
  },
  {
    index: 6,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/316c7597-08da-4d77-9243-13292e282050.jpg',
    location: 'London',
    verified: 550,
    description:
      'Explore London from secluded garden flats and luminous lofts—all verified for quality and design.',
    type: 7,
    color: '#2b3651'
  },
  {
    index: 7,
    img:
      'https://a0.muscache.com/4ea/air/v2/pictures/d82b445b-b7ce-4277-9131-3aab48633e9d.jpg',
    location: 'Los Angeles',
    verified: 930,
    description:
      'Find beachside bungalows, mid-century modern cottages, and more verified places to stay in the City of Angels.',
    type: 8,
    color: '#dd5337'
  }
];

const uniqueplacesContent = [
  {
    img:
      'https://a0.muscache.com/im/pictures/0e25bbd4-d081-4bab-85de-a8fd05245b53.jpg?aki_policy=large',
    category: '1,910 Treehouses',
    title: 'Get some perspective',
    description:
      'Take your trip to new heights with these one-of-a-kind treehouses.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/1df93d87-26a5-4c5e-8a91-b37ccb173aa1.jpg?aki_policy=large',
    category: '2000+ Boats',
    title: 'Sail the high seas',
    description:
      'Follow in the footsteps of adventurers past with boats of all shapes and sizes.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/408ad1e8-0367-4cb7-be52-6d7bfcc9d046.jpg?aki_policy=large',
    category: '1,820 Yurts',
    title: 'Made just for glamping',
    description: 'Embrace a mix of indoor comfort and the great outdoors.'
  }
];

const Featured = ({ size }) => {
  const [loading, setLoading] = useState(true);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds) => {
    await sleep(seconds);
    setLoading(false);
  };

  const [state, setState] = useState({
    translate: 0,
    transition: 0.6,
    activeIndex: 0
  });

  const [width, setWidth] = useState(0);

  const container = useRef();

  useLayoutEffect(() => {
    if (container.current) {
      setWidth(container.current.offsetWidth);
    }
  }, [container]);

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * 200
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return;
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: ((activeIndex - 1) * width) / 3
    });
  };

  setSleep(3000);

  return (
    <>
      <div
        ref={container}
        id='carousel'
        className='w-full px-6 md:px-8 lg:px-10 xl:px-10 xl:max-w-8.5xl mx-auto relative mt-8 overflow-y-hidden'>
        <div>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-gray-750 text-2xl'>
            Featured Airbnb Plus destinations
          </h3>
        </div>
        <div className='pb-8'>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-sm'>
            Browse beautiful places to stay with all the comforts of home, plus
            more
          </p>
        </div>
        <div className='w-full mb-16 relative overflow-hidden'>
          <SliderContent
            translate={translate}
            transition={transition}
            width={1600}>
            <CarouselCard
              bg='blue'
              featured1={featureds[0]}
              featured2={featureds[1]}
              featured3={featureds[2]}
            />
            <CarouselCard
              bg='blue'
              featured1={featureds[3]}
              featured2={featureds[4]}
              featured3={featureds[5]}
            />
            <CarouselCard
              bg='blue'
              featured1={featureds[6]}
              featured2={featureds[7]}
            />
          </SliderContent>
          <div className='absolute' style={{ top: '25%', left: -15 }}>
            <button
              onClick={prevSlide}
              className='bg-white p-3 rounded-full shadow-xl'>
              <div className='w-3 h-3'>
                <svg
                  className='w-full h-full'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 492 492'>
                  <g>
                    <g>
                      <path
                        d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div className='absolute' style={{ top: '25%', right: -5 }}>
            <button
              onClick={nextSlide}
              className=' bg-white p-3 shadow-xl rounded-full'>
              <div className='w-3 h-3'>
                <svg
                  className='w-full h-full'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 492.004 492.004'>
                  <g>
                    <g>
                      <path
                        d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

export default withSize()(Featured);
