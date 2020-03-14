import * as React from 'react';
import ReactPlayer from 'react-player';

// Layout
import { ExperiencesHeader } from '../../components/hostexperiences/layout/ExperiencesHeader';
import { ExperienceBanner } from '../../components/hostexperiences/layout/ExperiencesBanner';

export default () => {
  return (
    <>
      <div className='relative top-0 bg-white w-screen z-50'>
        <ExperiencesHeader />
      </div>

      <div style={{ top: 150 }} className='w-screen fixed top-0 left-0'>
        <ReactPlayer
          width='100%'
          height='100%'
          playing
          loop
          url='https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4'
        />
      </div>
      <div className='relative z-50'>
        <div
          id='hostexperience__banner'
          className='w-full h-156 bg-white flex items-center justify-center'>
          <div className='lg:max-w-5.5xl'>
            <div className='my-4'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='uppercase text-sm text-gray-750'>
                Host an experience on Airbnb
              </p>
            </div>
            <div className='my-3'>
              <h3
                id='hostexperience__banner-title'
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-7xl tracking-tighter leading-20'>
                Earn money leading people on activities you love.
              </h3>
            </div>
          </div>
        </div>
        <div
          id='hostexperience__what-bottom'
          className='relative w-screen h-screen bg-transparent'>
          <div className='w-full absolute bottom-0 flex items-center justify-center h-48'>
            <div>
              <div className='my-2'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-white text-5xl tracking-tight'>
                  What's an experience?
                </h3>
              </div>
              <div className='w-80p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-white text-sm'>
                  It’s an activity that goes beyond the typical tour or class,
                  designed and led by locals all over the world. Show off your
                  city, craft, cause, or culture by hosting an experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
