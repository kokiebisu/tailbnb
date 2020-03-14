import * as React from 'react';
import { HostSection } from '../../host/wrapper/HostSection';
import { QuestionCard } from '../../host/functions/QuestionCard';

export const HomesQuestions: React.FC<{}> = () => {
  return (
    <HostSection title='Frequently asked questions'>
      <div className='lg:flex'>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='md:w-full lg:w-1/2 flex lg:justify-end'>
          <div className='lg:w-95p'>
            <div className='my-10'>
              <QuestionCard title='Who can be an Airbnb host?' />
            </div>
            <div className='my-10'>
              <QuestionCard title='What is required of guests before booking?' />
            </div>
            <div className='md:mt-10 lg:my-10'>
              <QuestionCard title='How much does it cost to list my space?' />
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='lg:w-1/2 flex lg:justify-end'>
          <div className='lg:w-95p'>
            <div className='mt-10 lg:my-10'>
              <QuestionCard title='What protection do I have against property damage?' />
            </div>
            <div className='my-10'>
              <QuestionCard title="How should I choose my listing's price?" />
            </div>
            <div className='my-10'>
              <QuestionCard title='How can Airbnb help me with setting prices?' />
            </div>
          </div>
        </div>
      </div>
    </HostSection>
  );
};
