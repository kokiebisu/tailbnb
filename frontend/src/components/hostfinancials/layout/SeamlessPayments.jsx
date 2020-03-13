import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';
import { Table } from '../../host/functions/Table';

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
            <img
              className='w-full h-full'
              src='https://a0.muscache.com/pictures/0d55adf2-c050-4778-b462-2b2e40bc2dfc.jpg'
            />
          </CharacteristicCard>
          <CharacteristicCard
            title='Receive a booking'
            description='Airbnb charges each guest before arrival to ensure you’ll always get paid on time when you host. You never have to handle money directly.'>
            <img
              className='w-full h-full'
              src='https://a0.muscache.com/pictures/a12fd9da-c6d6-41f9-a040-282114d0cb87.jpg'
            />
          </CharacteristicCard>
          <CharacteristicCard
            title='Get paid after check-in'
            description='Airbnb typically releases your money about 24 hours after the guest is scheduled to arrive to make sure check-in goes smoothly.'>
            <img
              className='w-full h-full'
              src='https://a0.muscache.com/pictures/120e5167-72a2-40e6-bce6-e6ad1964cabe.jpg'
            />
          </CharacteristicCard>
        </div>
        <Table head={tableHead} body={tableBody} />
      </HostSection>
    </>
  );
};
