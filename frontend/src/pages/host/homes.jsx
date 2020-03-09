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

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';
import { MoreHostingCard } from '../../components/hosthomes/functions/MoreHostingCard';

// Images
const setup = require('../../../public/img/high/host-setup.jpg');
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
        <HostAbout />
        <HostQuestions />
        <div className='w-full max-w-5xl mx-auto py-8'>
          <div className='mb-3'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-2xl text-gray-750'>
              More about hosting
            </h3>
          </div>
          <div className='flex'>
            <MoreHostingCard img={setup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
