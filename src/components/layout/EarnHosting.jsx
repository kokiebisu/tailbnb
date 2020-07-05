import * as React from 'react';

const img = require('../../../public/img/high/ready-earn-setup.jpg');

export const EarnHosting = ({ location }) => {
  return (
    <div className='w-full md:max-w-4xl lg:max-w-8.5xl mx-auto mt-8 mb-12 relative'>
      <div className='w-full h-96 md:h-112'>
        <img className='h-full w-full object-cover' src={img} />
      </div>
      <div id='ready'>
        <div className='mb-4'>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-white text-4xl md:text-4xl tracking-tighter'>
            Earn up to <span style={{ fontFamily: 'airbnb-bold' }}>$1,163</span>
            /month hosting your home in {location}
          </h3>
        </div>
        <button>
          <div className='bg-white py-3 px-5 rounded'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              Learn more
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
