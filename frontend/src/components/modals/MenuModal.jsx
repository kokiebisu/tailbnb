import * as React from 'react';

export const MenuModal = ({ switchMenuModal }) => {
  return (
    <div className='bg-white w-full fixed top-0 md:min-h-80 absolute z-100 overflow-hidden overflow-y-scroll'>
      <div className='m-6 flex items-center'>
        <button
          className='flex items-center'
          onClick={() => {
            switchMenuModal();
          }}>
          <svg
            viewBox='0 0 1000 1000'
            role='presentation'
            aria-hidden='true'
            focusable='false'
            className='h-8 w-8 block'
            style={{ fill: '#FF5A5F' }}>
            <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
          </svg>
          <div className='h-2 w-2 ml-2'>
            <svg
              style={{ transform: 'rotate(180deg)', fill: '#000000' }}
              className='h-full w-full'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 491.996 491.996'>
              <g>
                <g>
                  <path
                    d='M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z'
                  />
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div className='w-full'>
        <div className='mx-6 py-7 border-b border-gray-300'>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            Home
          </p>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='mx-6 py-3 border-b border-gray-300 text-gray-750'>
          <div className='py-3'>
            <p>Invite friends</p>
          </div>
          <div className='py-3'>
            <p>Refer hosts</p>
          </div>
          <div className='py-3'>
            <p>Airbnb for Work</p>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='mx-6 py-3 border-b border-gray-300 text-gray-750'>
          <div className='py-3'>
            <div>
              <p>Language</p>
            </div>
            <div>
              <p className='text-sm'>English (CA)</p>
            </div>
          </div>
          <div className='py-3'>
            <div>
              <p>Currency</p>
            </div>
            <div>
              <p className='text-sm'>$USD</p>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='mx-6 py-3 border-b border-gray-300 text-gray-750'>
          <div className='py-3 flex justify-between items-center'>
            <div>
              <div>
                <p>List your place</p>
              </div>
              <div className='flex'>
                <div>
                  <p>Earn up to</p>
                </div>
                <div>
                  <p>$1,166 a month</p>
                </div>
              </div>
            </div>
            <div className='h-11 w-10'>
              <svg className='h-full w-full' viewBox='0 0 26 24'>
                <path
                  style={{ fill: '#60b6b5' }}
                  d='m12 10a2.49 2.49 0 0 1 -1.3 2.18 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.35 3.3v1.5h2.5a.49.49 0 0 0 .5-.48v-11.03a.97.97 0 0 0 -.43-.75l-5.14-3a .96.96 0 0 0 -.86 0l-5.14 3a .95.95 0 0 0 -.43.76v1.05a2.5 2.5 0 0 1 2 2.45z'></path>
                <path
                  style={{ fill: '#484848' }}
                  d='m25.43 6.26a.5.5 0 0 1 -.69.17l-1.74-1.05v-4.38q-2 0-2 .01v2.16a.55.55 0 0 1 -.85.47l-3.99-2.45a.43.43 0 0 0 -.33 0l-7.56 4.62a.5.5 0 0 1 -.52-.85l7.56-4.62a1.4 1.4 0 0 1 1.38 0l3.32 2.03v-1.36a1 1 0 0 1 .98-1.01h2.02a1 1 0 0 1 .99.99v3.83l1.26.75a.5.5 0 0 1 .17.69zm-1.93 1.74a.5.5 0 0 0 -.5.5v10.5h-1.5a.5.5 0 0 0 0 1h1.9a.61.61 0 0 0 .6-.6v-10.9a.5.5 0 0 0 -.5-.5zm-4.5 8.5v3.5h-1v-3.5a2.49 2.49 0 0 0 -4.34-1.68 4.41 4.41 0 0 1 .34 1.68v3.5h-1v-3.5a3.46 3.46 0 0 0 -.5-1.77 3.5 3.5 0 0 0 -2.5-1.69 3.45 3.45 0 0 0 -.5-.04 3.54 3.54 0 0 0 -3.5 3.5v3.5h-1v-3.5a4.41 4.41 0 0 1 .34-1.68 2.49 2.49 0 0 0 -4.34 1.68v3.5h-1v-3.5a3.5 3.5 0 0 1 2.35-3.29 2.5 2.5 0 1 1 2.29 0 3.53 3.53 0 0 1 1.19.72 4.53 4.53 0 0 1 2.47-1.74 2.5 2.5 0 1 1 2.39 0 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.36 3.29zm-14-5.5a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zm6-1a1.5 1.5 0 0 0 -1-1.41 1.48 1.48 0 0 0 -.5-.09 1.5 1.5 0 0 0 0 3 1.48 1.48 0 0 0 .5-.09 1.5 1.5 0 0 0 1-1.41zm6 1a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5z'></path>
              </svg>
            </div>
          </div>
          <div className='py-3'>
            <p>Learn about hosting your home</p>
          </div>
          <div className='py-3'>
            <p>No time to host?</p>
          </div>
          <div className='py-3'>
            <div>
              <p>Host an experience</p>
            </div>
            <div>
              <p className='text-sm'>Earn money doing what you love</p>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='mx-6 py-3 border-b border-gray-300 text-gray-750'>
          <div className='py-3'>
            <p>Help</p>
          </div>
          <div className='py-3'>
            <p>Sign up</p>
          </div>
          <div className='py-3'>
            <p>Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
