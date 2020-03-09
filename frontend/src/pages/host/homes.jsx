import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';
import { Covered } from '../../components/hosthomes/layout/Covered';
import { SimplePayments } from '../../components/hosthomes/layout/SimplePayments';
import { Worldwide } from '../../components/hosthomes/layout/Worldwide';

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
        <Covered />
        <SimplePayments />
        <Worldwide />
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
              About Airbnb
            </h3>
          </div>

          <div className='flex'>
            <div className=''>
              <div className='pb-8'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-2xl text-gray-750'>
                  What is Airbnb?
                </h3>
              </div>
              <div className='w-90p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750'>
                  Airbnb connects people with places to stay and things to do
                  around the world. The community is powered by hosts, who
                  provide their guests with the unique opportunity to travel
                  like a local.
                </p>
              </div>
            </div>
            <div className=''>
              <div className='pb-8'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-2xl text-gray-750'>
                  What is hosting?
                </h3>
              </div>
              <div className='w-90p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750'>
                  If you have an extra room, entire home, or expertise, you can
                  earn money by sharing it with anyone in the world. You can
                  host your home, activity, or do both. When you host is up to
                  you.
                </p>
              </div>
              <div className='mt-4'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-green-850'
                  href=''>
                  Learn more about experience hosting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
