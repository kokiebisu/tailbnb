import * as React from 'react';

export const MoreLocations: React.FC<{}> = () => {
  return (
    <div className='w-full'>
      <div className='mb-4 flex items-center justify-start flex-wrap'>
        <p>More place to stay in Penafiel:</p>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-gray-650 lg:ml-2'>
          Apartments&nbsp;·&nbsp;Bed and breakfasts
        </p>
      </div>

      <div
        style={{ fontFamily: 'airbnb-book' }}
        className='w-full flex items-start justify-between flex-wrap text-gray-650'>
        <div className='w-1/2 lg:w-1/4'>
          <ul className='flex-col flex leading-loose'>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Playa del Carmen
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Merida
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Santa Monica
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Oswestry
              </li>
            </a>
            <a>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Phillip
              </li>
            </a>
          </ul>
        </div>
        <div className='w-1/2 lg:w-1/4'>
          <ul className='flex-col flex leading-loose'>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Cancun
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Nanpean
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Bridgewater
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Hangzhou
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Eagle Bay
              </li>
            </a>
          </ul>
        </div>
        <div className='w-1/2 lg:w-1/4'>
          <ul className='flex-col flex leading-loose'>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Cancun
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Nanpean
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Bridgewater
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Hangzhou
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Eagle Bay
              </li>
            </a>
          </ul>
        </div>
        <div className='w-1/2 lg:w-1/4'>
          <ul className='flex-col flex leading-loose'>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Tulum
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Mellieha
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                Dresden
              </li>
            </a>
            <a href=''>
              <li className='inline-block hover:border-gray-600 border-b border-transparent'>
                New South Wales
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
