import * as React from 'react';

// Functions
import { GreatGuestsCard } from '../functions/GreatGuestsCard';

export const GreatGuests = () => {
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
              Control how you host
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
    </>
  );
};
