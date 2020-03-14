import * as React from 'react';
import ReactPlayer from 'react-player';

// Layout
import { ExperiencesHeader } from '../../components/hostexperiences/layout/ExperiencesHeader';
import { ExperienceBanner } from '../../components/hostexperiences/layout/ExperiencesBanner';
import { WhatsAnExperience } from '../../components/hostexperiences/layout/WhatsAnExperience';
import { ExperienceAspect } from '../../components/hostexperiences/layout/ExperienceAspect';

// Images
const experience1 =
  'https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=x_large';
const experience2 =
  'https://a0.muscache.com/im/pictures/55b065f5-e6d9-4a0a-8066-9c1850db7660.jpg?aki_policy=x_large';
const experience3 =
  'https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=x_large';

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
        <ExperienceBanner />
        <WhatsAnExperience />
        <div classsName='relative w-screen'>
          <div className='bg-black pt-48 pb-16'>
            <div className='mb-16'>
              <ExperienceAspect
                img={experience1}
                position='left'
                title='Create an activity, your way'
                description='Food tour by bike, light photography at night, tapas on a boat, or yoga (with goats). Create and curate a unique activity people want to try.'
              />
            </div>
            <div className='mb-16'>
              <ExperienceAspect
                img={experience2}
                position='right'
                title='Do what you love (and get paid)'
                description='Scout for street art or surf at sunset, turn your passion into profit. Earn money without it feeling like a job.'
              />
            </div>
            <div className='mb-16'>
              <ExperienceAspect
                img={experience3}
                position='left'
                title='Get voices for your cause'
                description='Lead a hike with rescue dogs, or teach ethical fashion. Raise awareness of your cause in a whole new way.'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
