import * as React from 'react';

export const PeopleHost: React.FC<{}> = () => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto flex justify-center border-t border-b border-gray-300 mb-32'>
      <div className='pt-12 pb-6 md:pt-24 md:pb-12 flex flex-col md:items-center'>
        <div className='md:w-70p lg:w-80p'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl md:text-3xl text-gray-750 md:text-center leading-8'>
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
