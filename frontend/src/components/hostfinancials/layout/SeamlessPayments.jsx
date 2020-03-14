import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Layouts
import { QuoteRight } from '../../host/layout/QuoteRight';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';
import { Table } from '../../host/functions/Table';

// Images
const seamlesspaymentsQuote = require('../../../../public/img/high/host-payments-quote.jpg');

const tableHead = {
  column1: 'How do our fees compare?',
  column2: 'Airbnb',
  column3: 'HomeAway',
  column4: 'Booking.com'
};

const tableBody = [
  {
    column1: 'Host servece fee (per booking)',
    column2: '3-5%',
    column3: '5%',
    column4: '15-20%'
  },
  {
    column1: 'Always free to list',
    column2: true,
    column3: true,
    column4: true
  },
  {
    column1: 'No credit card processing fees',
    column2: true,
    column3: true,
    column4: false
  },
  {
    column1: '$1M USD protection for property damage included',
    column2: true,
    column3: false,
    column4: false
  }
];

export const SeamlessPayments = () => {
  return (
    <>
      <HostSection title='Seamless payments'>
        <div className='lg:flex flex-grow '>
          <CharacteristicCard
            title='List your space for free'
            description='You can advertise your home to millions of travellers with no strings attached—no sign-up charges or membership fees.'>
            <div className='w-12 h-12'>
              <img
                className='w-full h-full'
                src='https://a0.muscache.com/pictures/0d55adf2-c050-4778-b462-2b2e40bc2dfc.jpg'
              />
            </div>
          </CharacteristicCard>
          <CharacteristicCard
            title='Receive a booking'
            description='Airbnb charges each guest before arrival to ensure you’ll always get paid on time when you host. You never have to handle money directly.'>
            <div className='w-12 h-12'>
              <img
                className='w-full h-full'
                src='https://a0.muscache.com/pictures/a12fd9da-c6d6-41f9-a040-282114d0cb87.jpg'
              />
            </div>
          </CharacteristicCard>
          <CharacteristicCard
            title='Get paid after check-in'
            description='Airbnb typically releases your money about 24 hours after the guest is scheduled to arrive to make sure check-in goes smoothly.'>
            <div className='w-12 h-12'>
              <img
                className='w-full h-full'
                src='https://a0.muscache.com/pictures/120e5167-72a2-40e6-bce6-e6ad1964cabe.jpg'
              />
            </div>
          </CharacteristicCard>
        </div>
        <div className='my-16'>
          <Table head={tableHead} body={tableBody} />
        </div>
        <div className='lg:pt-32 pb-8 md:pb-16'>
          <QuoteRight
            title="We're able to set a little bit aside towards retirement and toward tuition bills for both our children."
            description='JB and Ramona host in Boston to earn extra money for retirement.'
            img={seamlesspaymentsQuote}
          />
        </div>
      </HostSection>
    </>
  );
};
