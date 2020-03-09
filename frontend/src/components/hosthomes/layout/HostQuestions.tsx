import * as React from 'react';

export const HostQuestions: React.FC<{}> = () => {
  return (
    <div className='w-full max-w-5xl mx-auto py-8'>
      <div className='flex justify-center'>
        <div
          style={{ width: 70, height: 2 }}
          className='bg-gray-650 rounded-lg'></div>
      </div>

      <div className='flex justify-center mb-12 mt-2'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-850 text-6xl tracking-tight'>
          Frequently asked questions
        </h3>
      </div>
      <div className='flex'>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-1/2 text-green-850 text-lg flex justify-end'>
          <div className='w-95p'>
            <div className='my-10'>
              <a href=''>Who can be an Airbnb host?</a>
            </div>
            <div className='my-10'>
              <a href=''>What is required of guests before booking?</a>
            </div>
            <div className='my-10'>
              <a href=''>How much does it cost to list my space?</a>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-1/2 text-green-850 text-lg flex justify-end'>
          <div className='w-95p'>
            <div className='my-10'>
              <a href=''>What protection do I have against property damage?</a>
            </div>
            <div className='my-10'>
              <a href=''>How should I choose my listing's price?</a>
            </div>
            <div className='my-10'>
              <a href=''>How can Airbnb help me with setting prices?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};