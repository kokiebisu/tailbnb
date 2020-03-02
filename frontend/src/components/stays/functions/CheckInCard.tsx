import React from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PulseLoader from 'react-spinners/PulseLoader';

interface Prop {
  length: boolean;
  loading: boolean;
}

export const CheckInCard: React.FC<Prop> = ({ loading, length }) => {
  const [loaded, setLoaded] = useState<boolean>(true);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds: number) => {
    await sleep(seconds);
    setLoaded(false);
  };

  setSleep(5000);

  return (
    <>
      {length ? (
        <>
          {console.log('entered true')}
          <div className='lg:w-5/12 lg:h-121r'>
            <div className='shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10'>
              <div className='w-full mx-5 items-center flex lg:flex-col justify-between'>
                {loading ? (
                  <div className='flex justify-start w-full mb-4'>
                    <Skeleton width={300} height={30} />
                  </div>
                ) : (
                  <h3
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-md lg:w-full py-5 lg:text-2xl text-gray-850'>
                    Add dates for prices
                  </h3>
                )}
                {loaded ? (
                  <button
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap'>
                    <PulseLoader size={10} color={'#ffffff'} />
                  </button>
                ) : (
                  <button
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap'>
                    Check Availability
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='lg:w-5/12 lg:h-77r'>
            <div className='shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10'>
              <div className='w-full mx-5 items-center flex lg:flex-col justify-between'>
                {loading ? (
                  <div className='flex justify-start w-full mb-4'>
                    <Skeleton width={300} height={30} />
                  </div>
                ) : (
                  <h3
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-md lg:w-full py-5 lg:text-2xl text-gray-850'>
                    Add dates for prices
                  </h3>
                )}
                {loaded ? (
                  <button
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap'>
                    <PulseLoader size={10} color={'#ffffff'} />
                  </button>
                ) : (
                  <button
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap'>
                    Check Availability
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
