import * as React from 'react';

interface Prop {
  setRegisterModal: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
  setType: (type: string) => void;
  type: string;
  nottype: string;
  phrase: string;
}

export const RegisterModal: React.FC<Prop> = ({
  setRegisterModal,
  setType,
  type,
  nottype,
  phrase
}) => {
  return (
    <>
      <div
        id='darkOverlay'
        className='fixed w-full h-full top-0 left-0 z-20 overflow-hidden'
      />
      <div
        id='centerAbsolute'
        className='relative rounded-xl hidden fixed bg-white md:block w-144 pb-8 z-50'>
        <div className='w-full border-b border-gray-300 mt-2 flex justify-center items-center'>
          <div className='relative w-11/12 flex justify-center items-center my-3'>
            <div className='flex items-center absolute left-0 z-20 '>
              <button onClick={() => setRegisterModal(false)}>
                <div className='inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2'>
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 47.971 47.971'>
                    <g>
                      <path
                        d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z'
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
            <div className='w-full flex justify-center items-center'>
              <h3 style={{ fontFamily: 'airbnb-bold' }}>{type}</h3>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-11/12'>
            <div className='my-3 mt-10'>
              <div className='w-full'>
                <form action=''>
                  <div className='relative'>
                    <label
                      style={{ fontFamily: 'airbnb-book' }}
                      htmlFor='country'
                    />
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='absolute text-gray-650 text-xs top-0 pl-3 pt-2'>
                      Country/Region
                    </p>
                    <select
                      name='country'
                      style={{ fontFamily: 'airbnb-book' }}
                      className='appearance-none w-full border-t border-r border-l border-gray-500 py-4 rounded-b-none rounded-lg placeholder-gray-900 pl-3'
                      id='countryinput'>
                      <option value='1'>Canada (+1)</option>
                      <option value='2'>Japan (+81)</option>
                      <option value='3'>United States (+1)</option>
                    </select>

                    <div className='h-full pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                      <svg
                        className='fill-current h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <input
                      className='appearance-none  w-full border border-gray-500 py-3 rounded-t-none rounded-lg placeholder-gray-900 pl-4'
                      type='text'
                      name='phone'
                      style={{ fontFamily: 'airbnb-book' }}
                      placeholder='Phone number'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='py-3'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-xs text-gray-650'>
                We'll call or text you to confirm your number. Standard message
                and data rates apply.
              </p>
            </div>
            <button
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full bg-pink-750 py-3 rounded-lg text-white'>
              <p>Continue</p>
            </button>
            <div className='pt-4 pb-2'>
              <p id='pseudo'>
                <span
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-xs text-gray-750'>
                  or
                </span>
              </p>
            </div>
            <div className='w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4'>
              <div className='absolute left-0 ml-4'>
                <svg
                  className='w-5 h-5'
                  style={{ fill: '#767676' }}
                  viewBox='0 0 479.058 479.058'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z' />
                </svg>
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with email
              </p>
            </div>
            <div className='w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4'>
              <div style={{ marginLeft: 15 }} className='absolute left-0'>
                <div className='w-5'>
                  <svg viewBox='0 0 24 24'>
                    <g fill='none' fillRule='evenodd'>
                      <mask id='b' style={{ fill: '#fff' }}>
                        <use href='#a'>
                          <path id='a' d='M.001 0H24v23.854H.001z'></path>
                        </use>
                      </mask>
                      <path
                        d='M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12'
                        style={{ fill: '#1877F2' }}
                        mask='url(#b)'></path>
                      <path
                        d='M16.671 15.469L17.203 12h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0V15.47h2.796'
                        fill='#FFF'></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with Facebook
              </p>
            </div>
            <div className='w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4'>
              <div style={{ marginLeft: 17 }} className='absolute left-0'>
                <div className='w-5'>
                  <svg className='w-full h-full' viewBox='0 0 18 18'>
                    <g fill='none' fillRule='evenodd'>
                      <path
                        d='M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z'
                        style={{ fill: '#EA4335' }}></path>
                      <path
                        d='M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z'
                        style={{ fill: '#4285F4' }}></path>
                      <path
                        d='M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z'
                        style={{ fill: '#FBBC05' }}></path>
                      <path
                        d='M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z'
                        style={{ fill: '#34A853' }}></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with Google
              </p>
            </div>
            <div className='w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4'>
              <div style={{ marginLeft: 17 }} className='absolute left-0'>
                <div className='w-5'>
                  <svg style={{ fill: '#484848' }} viewBox='0 0 24 24'>
                    <path d='m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z'></path>
                  </svg>
                </div>
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with Apple
              </p>
            </div>
            <div className='flex'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-sm text-gray-750'>
                {phrase} have an account?
              </p>
              <button
                onClick={() => setType(`${nottype}`)}
                style={{ fontFamily: 'airbnb-medium' }}
                className='border-b border-gray-750 text-sm ml-2'>
                {nottype}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
