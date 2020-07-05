import * as React from 'react';

// Function
import { KeepInMindCard } from '../functions/KeepInMindCard';

export const KeepInMind: React.FC<{}> = () => {
  return (
    <>
      <div className='px-4 md:px-16 w-full mx-auto lg:max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='mb-8 md:mb-0 w-full md:w-4/12 md:h-full'>
          <h3 className='lg:w-2/3 lg:sticky top-0 text-2xl md:text-3xl text-gray-750'>
            Things to keep in mind
          </h3>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='w-full md:w-8/12 md:px-4 text-gray-750'>
          <div className='w-full flex justify-between items-center border-b border-gray-300'>
            <KeepInMindCard
              order='top'
              title='Cancellation policy'
              description='Any experience can be cancelled and fully refunded within 24 hours of
          purchase.'
            />
            <div className='h-3 w-3 md:hidden'>
              <svg
                style={{ fill: '#484848' }}
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 492.004 492.004'>
                <g>
                  <g>
                    <path
                      d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className='w-full flex justify-between items-center border-b border-gray-300'>
            <KeepInMindCard
              order='middle'
              title='Communication policy'
              description='Always communicate through Airbnb. To protect your payment, never transfer money or communicate outside of the Airbnb website or app.'
            />
            <div className='h-3 w-3 md:hidden'>
              <svg
                style={{ fill: '#484848' }}
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 492.004 492.004'>
                <g>
                  <g>
                    <path
                      d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className='w-full flex justify-between items-center'>
            <KeepInMindCard
              order='bottom'
              title='Guest requirements'
              description='Up to 6 guests ages 18 and up can attend. Parents may also bring children under 2 years of age.

              The activity level for this adventure is moderate.'
            />
            <div className='h-3 w-3 md:hidden'>
              <svg
                style={{ fill: '#484848' }}
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 492.004 492.004'>
                <g>
                  <g>
                    <path
                      d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
