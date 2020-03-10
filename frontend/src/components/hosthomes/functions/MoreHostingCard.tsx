import * as React from 'react';

interface Props {
  img: string;
  title: string;
  description: string;
  last: boolean;
}

export const MoreHostingCard: React.FC<Props> = ({
  img,
  title,
  description,
  last
}) => {
  return (
    <div className='w-1/3'>
      {last ? (
        <div className='w-full md:border lg:border-none md:rounded lg:rounded-none border-gray-300 md:shadow-md lg:shadow-none'>
          <div className='w-full md:h-32 lg:h-48'>
            <img
              className='h-full w-full md:rounded-bottom-none lg:rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div className='md:mx-4 lg:ml-0 my-2'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              {title}
            </p>
          </div>
          <div className='md:mx-4 lg:ml-0 my-1'>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-sm truncate'>
              {description}
            </p>
          </div>
          <div className='md:hidden lg:block'>
            <a
              style={{ fontFamily: 'airbnb-book' }}
              className='text-green-850 text-sm'
              href=''>
              Learn more
            </a>
          </div>
        </div>
      ) : (
        <div className='w-95p md:border lg:border-none md:rounded lg:rounded-none border-gray-300 md:shadow-md lg:shadow-none'>
          <div className='w-full md:h-32 lg:h-48'>
            <img
              className='h-full w-full md:rounded md:rounded-b-none lg:rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div className='md:mx-4 my-2'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              {title}
            </p>
          </div>
          <div className='md:mx-4 my-1'>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-sm truncate'>
              {description}
            </p>
          </div>
          <div className='md:hidden lg:block'>
            <a
              style={{ fontFamily: 'airbnb-book' }}
              className='text-green-850 text-sm'
              href=''>
              Learn more
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
