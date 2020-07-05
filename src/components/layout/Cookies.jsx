import React from 'react';

export const Cookies = ({ turnOffBanner }) => {
  return (
    <div
      style={{ boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.27)' }}
      className='bg-white p-5 rounded-3xl'>
      <div className='md:flex justify-between'>
        <div className='md:w-3/5'>
          <div className='pr-6'>
            <p
              style={{ fontFamily: 'airbnb-light' }}
              className='text-gray-750 leading-5 text-sm'>
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our Cookie Policy to learn more or go to Cookie
              Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div className='md:w-2/5 flex items-center justify-end'>
          <div className='w-full mt-6 md:mt-0'>
            <div className='w-full md:w-90p'>
              <div className='w-full flex items-center'>
                <div className='w-full flex items-center justify-center'>
                  <div className='w-1/2 h-full bg-green-850 rounded-lg mr-1'>
                    <div className='flex justify-center items-center'>
                      <button onClick={turnOffBanner} className='w-1/2 py-3'>
                        <p
                          style={{ fontFamily: 'airbnb-medium' }}
                          className='text-xs text-white'>
                          OK
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className='w-1/2 h-full bg-white border border-green-850 rounded-lg ml-1'>
                    <div className='flex justify-center items-center'>
                      <button onClick={turnOffBanner} className='py-3'>
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
        </div>
      </div>
    </div>
  );
};
