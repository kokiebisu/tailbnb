import * as React from 'react';
import { ControlHostingCard } from '../functions/ControlHostingCard';
import { QuoteRight } from '../../host/layout/QuoteRight';

export const ControlHosting = () => {
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
                <ControlHostingCard
                  icon='clock'
                  title='Host whenever you want'
                  description='   There’s no minimum or mandatory time you have to host, so you can
            block off dates when you’re not available. You can also set rules
            about your availability, including: • Min/max nights a guest can
            stay • How far in the future guests can book • Advance notice needed
            before a booking'
                />
                <ControlHostingCard
                  icon='money'
                  title='Set prices you feel good about'
                  description='You get to choose your nightly prices, and our pricing tools can help you decide. You can also easily add custom details like: • Cleaning fees • Weekly discounts • Special prices for specific times of year'
                  link='Learn about making money on Airbnb'
                />
              </div>
            </div>
            <div>
              <div className='flex flex-wrap lg:flex-row'>
                <ControlHostingCard
                  icon='calendar'
                  title='Quickly coordinate calendars'
                  description='To avoid getting booked when you can’t host or have an existing reservation, you can connect your Airbnb calendar with your other calendars. This allows you to keep all calendars up-to-date automatically.'
                />
                <ControlHostingCard
                  icon='keys'
                  title='Establish rules for your space'
                  description='To help set expectations, you can add House Rules that guests must agree to before booking. If a guest breaks a rule after they book, you can cancel the reservation without penalty.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16'>
        <QuoteRight
          title='Getting started was much easier than I anticipated.'
          description='Mia and Lucas host in Rome to earn extra money for retirement.'
        />
      </div>
    </>
  );
};
