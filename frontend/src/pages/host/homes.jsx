import * as React from 'react';

// Layout
import { HostHomesHeader } from '../../components/hosthomes/layout/HostHomesHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';
import { Covered } from '../../components/hosthomes/layout/Covered';

// Functions
import { HostHomesCard } from '../../components/hosthomes/functions/HostHomesCard';
import { SimplePaymentsCard } from '../../components/hosthomes/functions/SimplePaymentsCard';

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
              Payments made simple
            </h3>
          </div>
          <div className='flex'>
            <SimplePaymentsCard
              title='Charge what you want'
              description='You always get to pick your price. Need help? We have tools to help you match demand in your area.'
              last={false}
            />
            <SimplePaymentsCard
              title='Pay low fees'
              description='There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the lowest fees in the industry.'
              last={false}
            />
            <SimplePaymentsCard
              title='Get paid quickly'
              description='Once a guest checks in, we can send your money by Paypal, direct deposit, or other available methods.'
              links='Learn how to make money on Airbnb'
              last={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default homes;
