import * as React from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { TweenMax, Power3 } from 'gsap';

// interface Props {
//   switchMenuModal: (boolean: boolean) => void;
// }

export const HostMenuModal = ({ switchMenuModal }) => {
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
                style={{ fill: '#008489', visibility: 'visible' }}>
                <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
              </svg>
            </div>
            <div ref={(el) => (arrow = el)} className='h-2 w-2 ml-2'>
              <svg
                style={{ fill: '#008489', transform: 'rotate(180deg)' }}
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
          <div className='mx-6 py-5 border-b border-gray-300'>
            <Link href='/'>
              <a
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850 text-sm'>
                Home
              </a>
            </Link>
          </div>
          <div
            style={{ fontFamily: 'airbnb-medium' }}
            className='mx-6 py-4 text-gray-750 text-sm'>
            <div className='py-4'>
              <p>Setup</p>
            </div>
            <div className='py-4'>
              <p>Safety</p>
            </div>
            <div className='py-4'>
              <p>Financials</p>
            </div>
            <div className='py-4'>
              <Link href='/host/services'>
                <a>Hosting services</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
