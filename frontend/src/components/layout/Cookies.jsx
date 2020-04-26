import React from 'react';

export const Cookies = ({ turnOffBanner }) => {
  return (
    <div
      style={{ boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.27)' }}
      className='bg-white p-5 rounded-3xl'>
      <div className='flex justify-between'>
        <div className=''>
          <div className='pr-24'>
            <p
              style={{ fontFamily: 'airbnb-light' }}
              className='text-gray-750 font-thin'>
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our Cookie Policy to learn more or go to Cookie
              Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center justify-center'>
            <div className='h-full bg-green-850 rounded-lg mr-1'>
              <div className='flex justify-center items-center'>
                <button onClick={turnOffBanner} className='px-24 py-3'>
                  <p
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-xs text-white'>
                    OK
                  </p>
                </button>
              </div>
            </div>
            <div className='h-full bg-white border border-green-850 rounded-lg ml-1'>
              <div className='flex justify-center items-center'>
                <button onClick={turnOffBanner} className='px-12 py-3'>
                  <p
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='block text-xs text-green-850 whitespace-no-wrap'>
                    Cookie Preferences
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
