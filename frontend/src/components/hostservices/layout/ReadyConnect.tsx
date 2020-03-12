import * as React from 'react';

// Images
const ready = require('../../../../public/img/high/ready-connect.jpg');

export const ReadyConnect: React.FC<{}> = () => {
  return (
    <div className='w-full lg:max-w-7xl mx-auto mt-8 mb-12 relative'>
      <div className='w-full h-96 md:h-112'>
        <img className='h-full w-full object-cover' src={ready} />
      </div>
      <div id='ready'>
        <div className='w-80p md:w-1/2 lg:w-50p mb-4'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-white text-4xl lg:text-6xl tracking-tighter leading-10 lg:leading-18'>
            Ready to connect with a hosting team?
          </h3>
        </div>
        <div>
          <button className='mt-8 bg-white py-3 px-5 rounded'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              Check availability
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
