import * as React from 'react';

const renderCategory = (category, info, number, decrement, increment) => {
  return (
    <>
      <div>
        <div className='text-gray-850'>
          <h3 style={{ fontFamily: 'airbnb-medium' }}>{category}</h3>
        </div>
        {info && (
          <>
            <div>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-sm'>
                {info}
              </p>
            </div>
          </>
        )}
      </div>
      <div className='flex items-center'>
        {number === 0 ? (
          <p>
            <div className='w-7 h-7'>
              <svg
                className='w-full h-full'
                viewBox='0 0 512 512'
                style={{ fill: '#c1e1e2' }}
                xmlns='http://www.w3.org/2000/svg'>
                <path d='m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0' />
                <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
              </svg>
            </div>
          </p>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              increment();
            }}>
            <div className='w-7 h-7'>
              <svg
                className='w-full h-full'
                viewBox='0 0 512 512'
                style={{ fill: '#008489' }}
                xmlns='http://www.w3.org/2000/svg'>
                <path d='m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0' />
                <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
              </svg>
            </div>
          </button>
        )}
        <div className='w-10 flex justify-center'>
          <div className=''>
            <p
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-lg text-gray-750'>
              {number}+
            </p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            decrement();
          }}>
          <div className='h-7 w-7'>
            <svg
              style={{ fill: '#008489' }}
              className='w-full h-full'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0' />
              <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
              <path d='m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0' />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

const GuestPickerSection = ({
  category,
  info,
  number,
  increment,
  decrement
}) => {
  return (
    <div className='py-4'>
      <div className='flex justify-between'>
        {renderCategory(category, info, number, increment, decrement)}
      </div>
    </div>
  );
};

export const GuestPickerModal = ({
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
  incrementInfant,
  decrementInfant,
  adult,
  children,
  infant,
  resetNumber,
  switchModal
}) => {
  return (
    <div className='absolute z-50 bg-white w-full px-6 shadow-xl'>
      <div className='relative py-8'>
        <GuestPickerSection
          category='Adults'
          number={adult}
          decrement={decrementAdult}
          increment={incrementAdult}
        />
        <GuestPickerSection
          category='Children'
          info='Ages 2 - 12'
          number={children}
          decrement={decrementChildren}
          increment={incrementChildren}
        />
        <GuestPickerSection
          category='Infants'
          info='Under 2'
          number={infant}
          decrement={decrementInfant}
          increment={incrementInfant}
        />
        {adult + children > 0 ? (
          <div className='absolute'>
            <button
              onClick={() => resetNumber()}
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-gray-750 text-sm'>
              Clear
            </button>
          </div>
        ) : null}
        <div className='flex justify-end'>
          <button
            onClick={switchModal}
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-green-850 text-sm'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
