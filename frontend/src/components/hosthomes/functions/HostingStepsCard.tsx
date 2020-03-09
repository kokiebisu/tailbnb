import * as React from 'react';

interface Props {
  title: string;
  description: string;
  link: boolean;
  last: boolean;
}

export const HostingStepsCard: React.FC<Props> = ({
  title,
  description,
  link,
  last
}) => {
  return (
    <div className='w-1/3'>
      {last ? (
        <div>
          <div className='h-12 w-12'>
            <svg
              className='h-full w-full'
              viewBox='0 0 32 32'
              style={{ fill: '#484848' }}>
              <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
            </svg>
          </div>
          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 leading-loose'>
              {description}
            </p>
          </div>
          {link ? (
            <div className='mt-4'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850'
                href=''>
                Learn how to start hosting
              </a>
            </div>
          ) : null}
        </div>
      ) : (
        <div className='w-85p'>
          <div className='h-12 w-12'>
            <svg
              className='h-full w-full'
              viewBox='0 0 32 32'
              style={{ fill: '#484848' }}>
              <path d='m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0'></path>
            </svg>
          </div>
          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 leading-loose'>
              {description}
            </p>
          </div>
          {link ? (
            <div className='mt-4'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850'
                href=''>
                Learn how to start hosting
              </a>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
