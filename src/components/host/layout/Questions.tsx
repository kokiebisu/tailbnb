import * as React from 'react';

// Wrapper
import { HostSection } from '../wrapper/HostSection';

// Functions
import { QuestionCard } from '../functions/QuestionCard';

interface Props {
  title: string;
  questions: { question: string }[];
}

export const Questions: React.FC<Props> = ({ title, questions }) => {
  return (
    <HostSection title={title}>
      <div className='lg:flex'>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='md:w-full lg:w-1/2 flex lg:justify-end'>
          <div className='lg:w-95p'>
            {questions[0] ? (
              <div className='my-10'>
                <QuestionCard title={questions[0].question} />
              </div>
            ) : null}
            {questions[1] ? (
              <div className='my-10'>
                <QuestionCard title={questions[1].question} />
              </div>
            ) : null}
            {questions[2] ? (
              <div className='md:mt-10 lg:my-10'>
                <QuestionCard title={questions[2].question} />
              </div>
            ) : null}
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='lg:w-1/2 flex lg:justify-end'>
          <div className='lg:w-95p'>
            {questions[3] ? (
              <div className='mt-10 lg:my-10'>
                <QuestionCard title={questions[3].question} />
              </div>
            ) : null}
            {questions[4] ? (
              <div className='my-10'>
                <QuestionCard title={questions[4].question} />
              </div>
            ) : null}
            {questions[5] ? (
              <div className='my-10'>
                <QuestionCard title={questions[5].question} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </HostSection>
  );
};
