import * as React from 'react';

// Images
const overview = require('../../../../public/img/high/ready-earn-overview.jpg');
const setup = require('../../../../public/img/high/ready-earn-setup.jpg');

interface Props {
  page: string;
}

const renderImg = (page: string) => {
  switch (page) {
    case 'overview':
      return <img className='h-full w-full object-cover' src={overview} />;
    case 'setup':
      return <img className='h-full w-full object-cover' src={setup} />;
    default:
      return (
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        />
      );
  }
};

export const HostReady: React.FC<Props> = ({ page }) => {
  return (
    <div className='w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative'>
      <div className='w-full h-96 md:h-112'>{renderImg(page)}</div>
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
