import * as React from 'react';

// Images
const ready = require('../../../../public/img/high/host-ready.jpg');

export const HostReady: React.FC<{}> = () => {
  return (
    <div className='w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative'>
      <div className='w-full h-96 md:h-112'>
        <img className='h-full w-full object-cover' src={ready} />
      </div>
      <div id='ready'>
        <div className='mb-4'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-white text-4xl md:text-6xl tracking-tighter'>
            Ready to earn?
          </h3>
        </div>
        <button>
          <div className='bg-white py-3 px-5 rounded'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              Get started
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
