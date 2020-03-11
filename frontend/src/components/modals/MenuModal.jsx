import * as React from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { TweenMax, Power3 } from 'gsap';

export const MenuModal = ({ switchMenuModal }) => {
  let arrow = useRef(null);
  let menu = useRef(null);
  let logo = useRef(null);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function sleepPrep() {
    await sleep(490);
    switchMenuModal(false);
  }

  useEffect(() => {
    turnOnMenu();
  }, []);

  const turnOnMenu = () => {
    TweenMax.from(menu, 0.6, {
      height: 0
    });
    TweenMax.from(arrow, 1, {
      rotation: '180_cw',
      opacity: 0.3,
      ease: Power3.easeOut
    });
    TweenMax.from(logo, 0.6, {
      fill: '#ffffff',
      opacity: 0.3,
      ease: Power3.easeIn
    });
  };

  const delay = () => {
    TimeRanges.sl;
  };

  const closeMenu = () => {
    TweenMax.to(menu, 0.4, { height: 0 });
    TweenMax.to(logo, 0.5, {
      fill: '#ffffff',
      ease: Power3.easeInOut
    });
    TweenMax.to(arrow, 1, {
      rotation: '-180_cw',
      opacity: 0.3,
      ease: Power3.easeOut
    });
    sleepPrep();
  };

  const configureScroll = (name) => {
    document.body.style.overflow = name;
  };

  return (
    <>
      {typeof window !== 'undefined' ? configureScroll('hidden') : null}
      <div className='overflow-hidden top-0 z-100 h-full w-full fixed'></div>
      <div
        ref={(el) => (menu = el)}
        id='menu-modal'
        style={{ boxSizing: 'border-box' }}
        className='w-full h-screen absolute top-0 z-200 bg-white overflow-y-scroll '>
        <div className='m-6 flex items-center'>
          <button
            className='flex items-center'
            onClick={() => {
              closeMenu();
            }}>
            <div className='h-8 w-8'>
              <svg
                ref={(el) => (logo = el)}
                viewBox='0 0 1000 1000'
                role='presentation'
                aria-hidden='true'
                focusable='false'
                className='h-full w-full block'
                style={{ fill: '#FF5A5F', visibility: 'visible' }}>
                <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
              </svg>
            </div>
            <div ref={(el) => (arrow = el)} className='h-2 w-2 ml-2'>
              <svg
                style={{ fill: '#484848', transform: 'rotate(180deg)' }}
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
            <div className='py-3 flex justify-between items-center'>
              <div className=''>
                <div>
                  <p>Language</p>
                </div>
                <div>
                  <p className='text-sm'>English (CA)</p>
                </div>
              </div>
              <div className='h-6 w-6'>
                <svg
                  style={{ fill: '#484848' }}
                  viewBox='0 0 24 24'
                  className='h-full w-full'>
                  <path d='m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z'></path>
                </svg>
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
                <div className='flex text-sm'>
                  <div>
                    <p>Earn up to&nbsp;</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'airbnb-bold' }}>$1,166 a month</p>
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
              <Link href='/host/homes'>
                <a>Learn about hosting your home</a>
              </Link>
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
            className='mx-6 pt-3 pb-48 sm:pb-24 md:pb-10 border-b border-gray-300 text-gray-750'>
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
    </>
  );
};
