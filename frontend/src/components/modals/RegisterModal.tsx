import * as React from 'react';

// Images
const facebook = require('../../../public/img/high/facebook.png');
const google = require('../../../public/img/high/google.png');

interface Prop {
  setRegisterModal: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
  setType: (type: string | ((prevValue: string) => string)) => void;
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
                <img className='w-6 h-6' src={facebook} />
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with Facebook
              </p>
            </div>
            <div className='w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4'>
              <div style={{ marginLeft: 17 }} className='absolute left-0'>
                <img className='w-5 h-5' src={google} />
              </div>
              <p
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-sm'>
                Continue with Google
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
