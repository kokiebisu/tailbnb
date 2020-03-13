import * as React from 'react';

// Functions
import { GreatGuestsCard } from '../functions/GreatGuestsCard';

const greatguest = require('../../../../public/img/high/great-guest.jpg');

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
      <div className='w-full px-6 md:max-w-2.5xl lg:max-w-5xl mx-auto'>
        <table
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full table-fixed text-gray-750 my-8'>
          <tbody>
            <tr>
              <td
                className='w-2/5 pr-4 py-5 text-2xl text-left border-b border-gray-300'
                style={{ fontFamily: 'airbnb-bold' }}>
                What can you require from all guests?
              </td>
              <td
                id='tableShadowTop'
                className='w-1/5 border-b border-gray-300 text-center text-sm'>
                Airbnb
              </td>
              <td className='w-1/5 border-b border-gray-300 text-center text-sm'>
                HomeAray
              </td>
              <td className='w-1/5 border-b border-gray-300 text-center text-sm'>
                Booking.com
              </td>
            </tr>
            <tr>
              <td className='py-8 text-sm border-b border-gray-300 text-left'>
                Verified phone number
              </td>
              <td
                id='tableShadowMiddle'
                className='py-8 text-sm border-b border-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b border-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b border-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='py-8 text-sm border-b bordery-gray-300 text-left'>
                Agreement to your House Rules
              </td>
              <td
                id='tableShadowMiddle'
                className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='py-8 text-sm border-b bordery-gray-300 text-left'>
                Government ID
              </td>
              <td
                id='tableShadowMiddle'
                className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='py-8 text-sm border-b bordery-gray-300 text-left'>
                Positively reviewed by another host
              </td>
              <td
                id='tableShadowMiddle'
                className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='py-8 text-sm border-b bordery-gray-300 text-left'>
                A message from the guest
              </td>
              <td
                id='tableShadowBottom'
                className='py-8 text-sm border-b bordery-gray-300 text-center'>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      style={{ fill: '#008489' }}
                      className='w-full h-full'
                      viewBox='0 0 24 24'>
                      <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center '>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
              <td className='py-8 text-sm border-b bordery-gray-300 text-center '>
                <div className='flex justify-center'>
                  <div className='h-4 w-4'>
                    <svg
                      viewBox='0 0 24 24'
                      style={{ fill: '#484848' }}
                      className='w-full h-full'>
                      <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='mt-3 mb-32 lg:my-3'>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-650 text-sm'>
            Last updated June 2018
          </p>
        </div>
      </div>
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
