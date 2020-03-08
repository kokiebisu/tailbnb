import * as React from 'react';
import { useState } from 'react';
import _ from 'lodash';
import * as data from './currency.json';

const currencies = JSON.parse(JSON.stringify(data));

export const CurrencyModal = ({ location, setCurrencyModal, setCurrency }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const defaultCurrency = currencies.default.find(
    (currency) => currency.location == location
  );

  const [selectedCountry, setSelectedCountry] = useState(defaultCurrency);

  const filteredCurrencies = currencies.default.filter(
    (currency) => !_.isEqual(currency, selectedCountry)
  );

  return (
    <>
      {' '}
      <div
        id='darkOverlay'
        className='fixed w-full h-full top-0 left-0 z-20 overflow-hidden'
      />
      <div
        id='centerAbsolute'
        className='relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50'>
        <div className='w-full border-b border-gray-300'>
          <div className='w-full mx-auto max-w-5xl mt-2 flex justify-center items-center'>
            <div className='bg-green-850 relative w-full px-4 flex justify-center items-center my-6'>
              <div className='w-full flex items-center absolute left-0 z-20'>
                <button onClick={() => setCurrencyModal(false)}>
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
            </div>
          </div>
        </div>

        <div className='w-full mx-auto max-w-5xl'>
          <div
            style={{ fontFamily: 'airbnb-medium' }}
            className='w-full text-2xl py-6 text-gray-750'>
            Choose currency
          </div>
          <div className='w-full flex flex-wrap'>
            <div className='w-1/5 flex mb-4'>
              <button className='w-90p border border-gray-750 rounded-lg flex justify-center'>
                <div className='w-85p py-1'>
                  <div className='flex'>
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-sm'>
                      {selectedCountry.full}
                    </p>
                  </div>
                  <div className='flex'>
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-sm text-gray-650'>
                      {selectedCountry.abbreviation}{' '}
                      {selectedCountry.abbreviation === null ? null : '-'}{' '}
                      {selectedCountry.symbol}
                    </p>
                  </div>
                </div>
              </button>
            </div>
            {filteredCurrencies.map((currency, index) => {
              return (
                <div className='w-1/5 flex mb-4'>
                  <button
                    onClick={() => {
                      setSelectedCountry(currency);
                      setCurrency(
                        `${currency.symbol} ${currency.abbreviation}`
                      );
                      refreshPage();
                      // Query to change currency
                    }}
                    className='hover:bg-gray-250 w-90p rounded-lg flex justify-center'>
                    <div className='w-85p py-1'>
                      <div className='flex'>
                        <p
                          style={{ fontFamily: 'airbnb-book' }}
                          className='text-sm'>
                          {currency.full}
                        </p>
                      </div>
                      <div className='flex'>
                        <p
                          style={{ fontFamily: 'airbnb-book' }}
                          className='text-sm text-gray-650'>
                          {currency.abbreviation}{' '}
                          {currency.abbreviation === null ? null : '-'}{' '}
                          {currency.symbol}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
