import * as React from 'react';
import { ControlHostingCard } from '../functions/ControlHostingCard';

const controlhosting = require('../../../../public/img/high/control-hosting-quote.jpg');

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
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={controlhosting} />
        </div>
        <div className='w-full md:w-1/2 relative flex items-center md:justify-end'>
          <div className='md:w-85p flex-col justify-center'>
            <div id='quote__control'>
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
                    id='quote__control-description'
                    style={{
                      fontFamily:
                        'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                    }}
                    className='text-lg lg:text-3xl text-gray-750 leading-tight'>
                    Getting started was much easier than I anticipated.
                  </p>
                </div>
              </div>
              <div className=''>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-sm lg:text-base text-gray-650 my-4'>
                  Mia and Lucas host in Rome to earn extra money for retirement.
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
