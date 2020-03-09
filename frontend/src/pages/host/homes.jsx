import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';
import { Covered } from '../../components/hosthomes/layout/Covered';
import { SimplePayments } from '../../components/hosthomes/layout/SimplePayments';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';
import { WorldwideCard } from '../../components/hosthomes/functions/WorldwideCard';

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
              Hosts like you, worldwide
            </h3>
          </div>
          <div className='flex'>
            <WorldwideCard title='2.9M' description='Hosts on Airbnb' />
            <WorldwideCard
              title='800K'
              description='Average Airbnb stays each night'
            />
            <WorldwideCard title='14K' description='New hosts per month' />
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
