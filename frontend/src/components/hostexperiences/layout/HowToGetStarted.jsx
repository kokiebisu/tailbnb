import * as React from 'react';

// Functions
import { HowToStartCard } from '../functions/HowToStartCard';

export const HowToGetStarted = () => {
  return (
    <div className='relative w-screen lg:pt-32 pb-16 bg-white'>
      <div className='px-6 md:max-w-1.5xl lg:max-w-5xl mx-auto'>
        <div className='mb-16'>
          <div className='grid md:grid-cols-2 flex items-center'>
            <div className=''>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-gray-750 text-3xl'>
                How to get started
              </h3>
            </div>
            <div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-lg text-gray-750'>
                Here’s a quick overview of the process, from start to finish.
              </p>
            </div>
          </div>
        </div>

        <div className='lg:grid grid-cols-3 gap-6'>
          <HowToStartCard
            number={1}
            title='Learn the quality standards'
            description='Make sure your experience meets our bar for expertise, insider access, and connection.'
          />
          <HowToStartCard
            number={2}
            title='Create an experience page'
            description='Your page is how people find you. Make a great first impression by highlighting your expertise and adding high-quality photos.'
          />
          <HowToStartCard
            number={3}
            title='Start hosting your experience'
            description='As long as your experience meets the standards, you’re ready to add dates and start hosting.'
          />
        </div>

        <div className='my-16 lg:my-32'>
          <div className='flex items-center justify-center'>
            <button
              style={{ fontFamily: 'airbnb-medium' }}
              className='bg-green-850 text-white w-full md:px-6 py-3 rounded'>
              Let's go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
