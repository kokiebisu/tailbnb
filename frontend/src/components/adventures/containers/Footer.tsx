import * as React from 'react';

export const Footer: React.FC<{}> = () => {
  return (
    <div className='block bg-white w-full border-t border-gray-300'>
      <div className='lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12'>
        <div className='hidden md:block lg:flex lg:flex-wrap lg:items-start lg::w-full md:mx-6 lg:mx-0 md:justify-between md:pb-1 lg:pb-10 lg:border-b md:border-gray-300'>
          <div className='lg:w-1/4 md:border-b border-gray-300 lg:border-none pb-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-900 text-xs mb-2 uppercase'>
              About
            </h3>
            <ul className='leading-9 md:flex flex-wrap lg:block'>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Diversity & Belonging
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Accessibility
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Trust & Safety
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Airbnb Citizen
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-900 text-xs mb-2 uppercase'>
              Community
            </h3>
            <ul className='leading-9 md:flex flex-wrap lg:block'>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Airbnb Magazine
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Airbnb for Work
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Invite friends
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-900 text-xs mb-2 uppercase'>
              Host
            </h3>
            <ul className='leading-9 md:flex flex-wrap lg:block'>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Host your home
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Host an experience
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Responsible hosting
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Refer hosts
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Open homes
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Olympics
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Responsible hosting
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-900 text-xs mb-2 uppercase'>
              Support
            </h3>
            <ul className='leading-9 md:flex flex-wrap lg:block'>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Help Centre
                </a>
              </li>
              <li className='md:w-1/3'>
                <a
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-850 text-sm'
                  href=''>
                  Neighbourhood Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full bg-green-850 flex flex-col-reverse lg:flex-row md:justify-center lg:justify-between'>
          <div className='bg-pink-750 md:flex md:flex-col md:items-center md:items-start lg:flex-row lg:justify-between'>
            <div>
              <p>2020 Airbnb, Inc. All rights reserved</p>
            </div>
            <div className='flex md:justify-center'>
              <p className='hidden lg:block'>&nbsp;·&nbsp;</p>
              <a href=''>Privacy</a>
              <p>&nbsp;·&nbsp;</p>
              <a href=''>Privacy</a>
              <p>&nbsp;·&nbsp;</p>
              <a href=''>Privacy</a>
            </div>
          </div>
          <div className='bg-red-550 flex md:justify-center'>
            <div className='flex'>
              <div className='flex'>
                <div>world</div>
                <div>
                  <p>English (CA)</p>
                </div>
              </div>
              <div className='flex'>
                <div>dollar</div>
                <div>
                  <p>CAD</p>
                </div>
              </div>
            </div>
            <div className='hidden md:flex'>
              <div>facebook</div>
              <div>facebook</div>
              <div>facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
