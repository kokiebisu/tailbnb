import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';

const background = require('../../../public/img/high/hosthome.jpg');

const homes = () => {
  return (
    <>
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
        <WhyHost />
        <HostingSteps />
        <div className='w-full max-w-5xl mx-auto py-8'>
          <div className='flex justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-850 text-6xl tracking-tight'>
              We've got you covered
            </h3>
          </div>
          <div className='flex'>
            <div className='w-1/2' style={{ fontFamily: 'airbnb-book' }}>
              <div className='w-85p'>
                <div>
                  <p className='text-gray-750'>
                    We know it’s a priority to trust the people staying in your
                    home. Airbnb allows you to set strict requirements for who
                    can book and to get to know guests before their stay. If
                    something does come up, though, we have your back. With our
                    Host Guarantee covering property damage and our Host
                    Protection Insurance for liability, you’re supported as a
                    host throughout.
                  </p>
                </div>
                <div className='mt-4'>
                  <a className='text-green-850' href=''>
                    Learn how Airbnb protects hosts
                  </a>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='w-90p'>
                <div
                  style={{ fontFamily: 'airbnb-book' }}
                  className='flex text-gray-750 items-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='h-full w-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                  <div className='ml-3'>
                    <p>Ability to require government ID before booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
