import * as React from 'react';

// Layout
import HostHomesHeader from '../../components/hosthomes/layout/HostHomesHeader';

// Functions
import HostHomesCard from '../../components/hosthomes/functions/HostHomesCard';

const background = require('../../../public/img/high/hosthome.jpg');

const homes = () => {
  return (
    <div>
      <HostHomesHeader />
      <div className='w-full max-w-layout mx-auto relative'>
        <div>
          <img
            src={background}
            style={{
              maxHeight: '60rem'
            }}
            className='w-full relative object-cover h-144'
          />
        </div>
        <HostHomesCard />
      </div>
    </div>
  );
};

export default homes;
