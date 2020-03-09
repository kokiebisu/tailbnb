import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';
import { Covered } from '../../components/hosthomes/layout/Covered';
import { SimplePayments } from '../../components/hosthomes/layout/SimplePayments';
import { Worldwide } from '../../components/hosthomes/layout/Worldwide';
import { HostAbout } from '../../components/hosthomes/layout/HostAbout';
import { HostQuestions } from '../../components/hosthomes/layout/HostQuestions';
import { MoreHosting } from '../../components/hosthomes/layout/MoreHosting';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';

// Images
const background = require('../../../public/img/high/hosthome.jpg');
const ready = require('../../../public/img/high/host-ready.jpg');

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
        <HostAbout />
        <HostQuestions />
        <MoreHosting />
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
            <button classname=' '>
              <div className='bg-white py-3 px-5 rounded'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-blue-400'>
                  Get started
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
