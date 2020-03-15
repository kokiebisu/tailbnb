import * as React from 'react';

// Functions
import { QuestionCard } from '../functions/QuestionCard';

export const ExperiencesQuestions: React.FC<{}> = () => {
  return (
    <div className='relative w-screen pt-16 md:pt-32 pb-16 bg-white'>
      <div className='px-6 md:max-w-1.5xl lg:max-w-5xl mx-auto'>
        <div className='md:mb-6 lg:mb-12'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-2xl md:text-3xl'>
            Frequently asked questions
          </h3>
        </div>
        <div>
          <QuestionCard
            title='Do I have to host a home to host an experience?'
            description='No. You don’t have to host guests overnight in your home or space to
            be an experience host.'
            link={null}
          />
          <QuestionCard
            title='What’s the time commitment?'
            description='You can host as often as you like—feel free to adjust your dates and times until you find what works best for you.'
            link={null}
          />
          <QuestionCard
            title='Do I need a business licence?'
            description='Depending on activities involved, certain experiences may require a business licence. Make sure to check local laws in your area to determine which licences may be required for your experience, especially if there is food, alcohol, or transportation involved. '
            link='Learn more'
          />
        </div>
        <div className='flex items-center'>
          <div className='my-7'>
            <p
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-green-850'>
              Show more
            </p>
          </div>
          <div className='ml-3'>
            <div className='w-2 h-2'>
              <svg
                className='w-full h-full'
                style={{ fill: '#008489' }}
                viewBox='0 0 18 18'>
                <path d='m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
