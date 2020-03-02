import * as React from 'react';

export const Availability: React.FC<{}> = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16'>
        <div
          style={{ fontFamily: 'airbnb-bold' }}
          className='w-full text-3xl text-gray-750 mb-8'>
          Availability
        </div>
        <div className='w-full flex justify-start items-start flex-wrap'>
          <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
            <div className='m-8'>
              <h3
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-2xl py-1'>
                Mar 03
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                Tuesday
              </p>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                From $130/person
              </p>
              <button
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850 mt-8'>
                Book
              </button>
            </div>
          </div>
          <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
            <div className='m-8'>
              <h3
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-2xl py-1'>
                Mar 03
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                Tuesday
              </p>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                From $130/person
              </p>
              <button
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850 mt-8'>
                Book
              </button>
            </div>
          </div>
          <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
            <div className='m-8'>
              <h3
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-2xl py-1'>
                Mar 03
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                Tuesday
              </p>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                From $130/person
              </p>
              <button
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850 mt-8'>
                Book
              </button>
            </div>
          </div>
          <div className='w-23p bg-white shadow-md rounded-xl mr-4'>
            <div className='m-8'>
              <h3
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-2xl py-1'>
                Mar 03
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                Tuesday
              </p>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-lg'>
                From $130/person
              </p>
              <button
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850 mt-8'>
                Book
              </button>
            </div>
          </div>
          <button className='border-2 border-green-850 rounded mt-24'>
            <div className='py-2 px-4'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-green-850'>
                Show more availability
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
