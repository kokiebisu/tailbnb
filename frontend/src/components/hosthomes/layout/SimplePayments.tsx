import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Layout
import { QuoteRight } from '../../host/layout/QuoteRight';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

export const SimplePayments: React.FC<{}> = () => {
  return (
    <>
      <HostSection title='Payments made simple'>
        <div className='lg:flex'>
          <CharacteristicCard
            children={null}
            title='Charge what you want'
            description='You always get to pick your price. Need help? We have tools to help you match demand in your area.'
            link={null}
          />
          <CharacteristicCard
            children={null}
            title='Pay low fees'
            description='There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the lowest fees in the industry.'
            link={null}
          />
          <CharacteristicCard
            children={null}
            title='Get paid quickly'
            description='Once a guest checks in, we can send your money by Paypal, direct deposit, or other available methods.'
            link='Learn how to make money on Airbnb'
          />
        </div>
        <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16'>
          <QuoteRight
            title='Hosting has helped me pay for new kitchen and other upgrades.'
            description='Jack hosts in London to earn extra money'
          />
        </div>
      </HostSection>
    </>
  );
};
