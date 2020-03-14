import * as React from 'react';

export const OnePhrase = ({ title, link }) => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto flex justify-center  mb-32'>
      <div className='pt-12 pb-6 md:pt-20 md:pb-20 flex flex-col md:items-center border-t border-b border-gray-300'>
        <div className='md:w-70p lg:w-80p'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl md:text-3xl text-gray-750 md:text-center leading-8'>
            {title}
          </h3>
        </div>
        <div className='my-6'>
          <a
            href=''
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-green-850'>
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};
