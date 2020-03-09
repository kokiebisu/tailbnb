import * as React from 'react';

// Functions
import HostHomesHeader from '../../components/hosthomes/functions/HostHomesHeader';

const background = require('../../../public/img/high/hosthome.jpg');

export default () => {
  return (
    <div>
      <HostHomesHeader />
      <div className='bg-red-500 w-full max-w-layout mx-auto relative'>
        <div>
          <img
            src={background}
            style={{
              maxHeight: '60rem'
            }}
            className='w-full relative object-cover h-144'
          />
        </div>
        <div className='bg-red-550 absolute top-0'>headercard</div>
      </div>
    </div>
  );
};
