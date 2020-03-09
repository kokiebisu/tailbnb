import * as React from 'react';

// Images
const ready = require('../../../../public/img/high/host-ready.jpg');

export const HostReady: React.FC<{}> = () => {
  return (
    <div className='w-full max-w-7xl mx-auto mt-8 mb-12 relative'>
      <div className='w-full h-104'>
        <img className='h-full w-full object-cover' src={ready} />
      </div>
      <div style={{ top: 90, left: 100 }} className='absolute top-0 left-0'>
        <div className='mb-4'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-white text-6xl tracking-tighter'>
            Ready to earn?
          </h3>
        </div>
        <button>
          <div className='bg-white py-3 px-5 rounded'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-blue-400'>
              Get started
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
