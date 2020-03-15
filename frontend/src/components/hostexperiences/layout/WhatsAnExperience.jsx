import * as React from 'react';

// Layout
import { ExperienceAspect } from './ExperienceAspect';

// Images
const experience1 =
  'https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=x_large';
const experience2 =
  'https://a0.muscache.com/im/pictures/55b065f5-e6d9-4a0a-8066-9c1850db7660.jpg?aki_policy=x_large';
const experience3 =
  'https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=x_large';

export const WhatsAnExperience = () => {
  return (
    <>
      <div
        id='hostexperience__what-bottom'
        className='relative w-screen h-screen bg-transparent flex justify-center'>
        <div className='px-6 md:px-0 md:max-w-3xl lg:max-w-5xl mx-auto absolute bottom-0 flex items-center justify-center h-48'>
          <div>
            <div className='my-2'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-white text-4xl lg:text-5xl tracking-tight'>
                What's an experience?
              </h3>
            </div>
            <div className='lg:w-80p'>
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
      <div className='relative w-screen'>
        <div className='bg-black pt-48 pb-16'>
          <div className='mb-32 lg:mb-16'>
            <ExperienceAspect
              img={experience1}
              position='left'
              title='Create an activity, your way'
              description='Food tour by bike, light photography at night, tapas on a boat, or yoga (with goats). Create and curate a unique activity people want to try.'
            />
          </div>
          <div className='my-32 lg:mb-16'>
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
    </>
  );
};
