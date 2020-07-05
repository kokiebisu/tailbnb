import * as React from 'react';

// Images
const detail2 = require('../../../../public/img/high/staydetail2.jpg');

interface Props {
  is_last: boolean;
  day: number;
  title: string;
  description: string;
}

export const ItineraryCard: React.FC<Props> = ({
  is_last,
  day,
  title,
  description
}) => {
  return (
    <>
      {is_last ? (
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='px-5 text-gray-750 relative'>
          <div style={{ marginBottom: 6 }}>
            <div
              style={{
                height: 7,
                width: 7,
                top: -6.5,
                left: -3.4
              }}
              className='absolute z-50'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>

            <p className='mb-2'>Day {day}</p>
            <div className='w-full md:flex justify-start items-start pb-8'>
              <div className='md:w-5/12'>
                <img className='h-full w-full' src={detail2} alt='' />
              </div>

              <div className='w-full md:w-7/12 md:pl-5'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='pt-3 pb-2 md:pt-0 md:pb-0 text-base'>
                  {title}
                </p>
                <p className='text-base'>{description}</p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 text-sm mt-4'>
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ fontFamily: 'airbnb-book' }}
          className='px-5 text-gray-750 border-l border-gray-800 relative'>
          <div style={{ marginBottom: 6 }}>
            <div
              style={{
                height: 7,
                width: 7,
                top: -7,
                left: -3.6
              }}
              className='absolute'>
              <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <g>
                  <g>
                    <path
                      d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
			 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
                    />
                  </g>
                </g>
              </svg>
            </div>

            <p className='mb-2'>Day {day}</p>
            <div className='w-full md:flex justify-start items-start pb-8'>
              <div className='md:w-5/12'>
                <img className='h-full w-full' src={detail2} alt='' />
              </div>

              <div className='w-full md:w-7/12 md:pl-5'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='pt-3 pb-2 md:pt-0 md:pb-0 text-base'>
                  {title}
                </p>
                <p className='text-base'>{description}</p>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-green-850 text-sm mt-4'>
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
