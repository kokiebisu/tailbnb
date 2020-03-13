import * as React from 'react';

// Functions
import { GreatGuestsCard } from '../functions/GreatGuestsCard';
import { Table } from '../../host/functions/Table';

const greatguest = require('../../../../public/img/high/great-guest.jpg');

export const GreatGuests = () => {
  const table = [
    {
      column1: 'What can you require from all guests?',
      column2: 'Airbnb',
      column3: 'HomeAray',
      column4: 'Booking.com'
    },
    {
      column1: 'Verified phone number',
      column2: true,
      column3: false,
      column4: true
    },
    {
      column1: 'Agreement to your House Rules',
      column2: true,
      column3: true,
      column4: true
    },
    {
      column1: 'Government ID',
      column2: true,
      column3: true,
      column4: false
    },
    {
      column1: 'Positively reviewed by another host',
      column2: true,
      column3: false,
      column4: false
    },
    {
      column1: 'A message from the guest',
      column2: true,
      column3: false,
      column4: false
    }
  ];
  return (
    <>
      <div className='w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto'>
        <div>
          <div className='mb-4 md:mb-0 flex md:justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>
          <div className='flex md:justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-4xl lg:text-6xl tracking-tighter'>
              Host great guests
            </h3>
          </div>
          <div>
            <div>
              <div className='flex flex-wrap lg:flex-row'>
                <GreatGuestsCard
                  icon='star'
                  title='Fair two-way reviews'
                  description='To help build trust and reputation on Airbnb, guests and hosts review each other after each reservation is complete. Before hosting a guest, you can check out their reviews from other hosts.'
                />
                <GreatGuestsCard
                  icon='chat'
                  title='Easy guest communication'
                  description='If you want to ask questions or set expectations before a stay, you can get to know guests in advance using our secure messaging tool.'
                />
              </div>
            </div>
            <div>
              <div className='flex flex-wrap lg:flex-row'>
                <GreatGuestsCard
                  icon='card'
                  title='Requirements to book'
                  description='You can require that every guest provide identification to Airbnb before booking with you. You’ll also have the opportunity to review reservations in advance or add extra controls over who can book. As a further check, every Airbnb reservation is scored for risk and we cancel any bookings that appear suspicious.'
                />
                <GreatGuestsCard
                  icon='clipboard'
                  title='Your space, your rules'
                  description='To help set expectations, you can add House Rules that guests have to agree to before booking, for example restrictions on smoking and events. If a guest breaks one of these rules once they’ve booked, you can cancel the reservation.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table row1={table[0]} row2={table[1]} row3={table[2]} row4={table[3]} />
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-32 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={greatguest} />
        </div>
        <div className='w-full md:w-1/2 relative flex items-center md:justify-end'>
          <div className='md:w-85p flex-col justify-center'>
            <div id='quote__greatguest'>
              <p
                style={{
                  fontFamily: 'circular-std-medium'
                }}
                className='text-6xl md:text-7xl lg:text-10xl text-yellow-850'>
                “
              </p>
            </div>
            <div className=''>
              <div className='mt-12'>
                <div className='md:w-85p'>
                  <p
                    id='quote__greatguest-description'
                    style={{
                      fontFamily:
                        'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                    }}
                    className='text-lg lg:text-3xl text-gray-750 leading-tight'>
                    I have learned that people are good. I can trust people.
                  </p>
                </div>
              </div>
              <div className=''>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-sm lg:text-base text-gray-650 my-4'>
                  Milaida hosts in Puerto Rico to earn extra money.
                </p>
              </div>
              <button>
                <div className='py-3 px-5 border-2 border-gray-750 rounded'>
                  <p
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-750'>
                    Learn how they host
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
