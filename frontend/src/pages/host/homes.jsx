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
        <div className='bg-red-550 w-full max-w-5xl mx-auto py-10 flex'>
          <div>
            <div className='py-8'>
              <h3>Why host on Airbnb?</h3>
            </div>
            <div>
              <p>
                No matter what kind of home or room you have to share, Airbnb
                makes it simple and secure to host travellers. You’re in full
                control of your availability, prices, house rules, and how you
                interact with guests.
              </p>
            </div>
          </div>
          <div>
            <div className='py-8'>
              <h3>We have your back</h3>
            </div>
            <div>
              <p>
                To keep you, your home, and your belongings safe, we cover every
                booking with $1M USD in property damage protection and another
                $1M USD in insurance against accidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homes;
