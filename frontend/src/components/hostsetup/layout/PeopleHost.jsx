import * as React from 'react';

export const PeopleHost = () => {
  return (
    <div className='w-full max-w-5xl mx-auto flex justify-center border-t border-b border-gray-300 mb-32'>
      <div className='pt-24 pb-12 flex flex-col items-center'>
        <div className='w-80p'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-3xl text-gray-750 text-center'>
            Over 2 million people host on Airbnb and no host's style is the
            same.
          </h3>
        </div>
        <div className='my-6'>
          <a
            href=''
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-green-850'>
            Learn what's expected of hosts
          </a>
        </div>
      </div>
    </div>
  );
};
