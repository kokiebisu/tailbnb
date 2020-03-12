import * as React from 'react';

// Functions
import { FindTeamCard } from '../functions/FindTeamCard';

// Images
const quote = require('../../../../public/img/high/findteam-quote.jpg');

export const FindTeam: React.FC<{}> = () => {
  return (
    <>
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto pt-4 pb-4 md:pb-16 lg:pb-0 md:pt-8'>
        <div className='my-8'>
          <div className='mb-4 md:mb-10 flex md:justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex md:justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-4xl lg:text-6xl tracking-tight leading-9'>
              Find a local hosting team
            </h3>
          </div>
          <div className='lg:flex lg:mt-16'>
            <div
              className='md:w-full lg:w-1/2 flex items-center'
              style={{ fontFamily: 'airbnb-book' }}>
              <div className='lg:w-85p'>
                <div className='text-gray-750 leading-relaxed'>
                  <div className='my-6'>
                    <p>
                      Now you can provide high-quality hospitality and earn
                      money with help from a hosting team.
                    </p>
                  </div>
                  <div className='my-6'>
                    <p>
                      Hosting teams are separate businesses that provide
                      professional hosting services to help you manage your
                      listing. If you qualify, we’ll match you with a hosting
                      team in your area.
                    </p>
                  </div>
                  <div className='my-6'>
                    <p>
                      For a fee—generally around 20% per booking—hosting teams
                      will manage everything from setup and booking to checkout
                      and cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-full lg:w-1/2'>
              <FindTeamCard description='Guest check-in and checkout' />
              <FindTeamCard description='Housekeeping and maintenance between stays' />
              <FindTeamCard description='Laundering and replacing linens' />
              <FindTeamCard description='24/7 guest support' />
              <FindTeamCard description='Listing creation with competitive pricing' />
              <FindTeamCard description='Booking request management' />
              <FindTeamCard description='Professional photography' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={quote} />
        </div>
        <div className='w-full md:w-1/2 relative flex items-center md:justify-end'>
          <div className='md:w-85p flex-col justify-center'>
            <div id='quote__findteam'>
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
                    id='quote__description'
                    style={{
                      fontFamily:
                        'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                    }}
                    className='text-lg lg:text-3xl text-gray-750 leading-tight'>
                    We probably wouldn't host on Airbnb if we didn't have a
                    hosting team.
                  </p>
                </div>
              </div>
              <div className=''>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-sm md:text-base text-gray-650 my-4'>
                  Sophie and Mason host in New York to earn extra income
                </p>
              </div>
              <button>
                <div className='py-3 px-5 border-2 border-gray-850 rounded'>
                  <p
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-850'>
                    Learn more
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
