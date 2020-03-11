import * as React from 'react';

export const QuestionsAnswered: React.FC<{}> = () => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto py-8'>
      <div className='flex md:justify-center'>
        <div
          style={{ width: 70, height: 2 }}
          className='bg-gray-650 rounded-lg'></div>
      </div>

      <div className='flex md:justify-center md:mb-12 mt-2'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-750 text-4xl lg:text-6xl tracking-tight'>
          Your questions answered
        </h3>
      </div>
      <div className='lg:flex'>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='md:w-full lg:w-1/2 text-green-850 md:text-lg flex lg:justify-end'>
          <div className='lg:w-95p'>
            <div className='my-10'>
              <a href=''>Who will my hosting team be?</a>
            </div>
            <div className='my-10'>
              <a href=''>Am I covered if something goes wrong?</a>
            </div>
            <div className='md:mt-10 lg:my-10'>
              <a href=''>Am I eligible for hosting services?</a>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='md:w-full lg:w-1/2 text-green-850 md:text-lg flex lg:justify-end'>
          <div className='lg:w-95p'>
            <div className='mt-10 lg:my-10'>
              <a href=''>What do I do with my personal belongings?</a>
            </div>
            <div className='my-10'>
              <a href=''>
                I run a hosting team. Can I offer hosting services through
                Airbnb?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
