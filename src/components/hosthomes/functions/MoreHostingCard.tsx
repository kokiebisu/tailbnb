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
    <div className='w-full md:w-1/3'>
      {last ? (
        <div className='w-full border lg:border-none rounded lg:rounded-none border-gray-300 shadow-md lg:shadow-none flex md:flex-col'>
          <div className='w-20 h-20 md:w-full md:h-32 lg:h-48 rounded'>
            <img
              className='h-full w-full rounded rounded-r-none md:rounded-tr md:rounded-b-none lg:rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div>
            <div className='mx-4 lg:ml-0 my-2'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-sm md:text-base text-gray-750'>
                {title}
              </p>
            </div>
            <div className='mx-4 lg:ml-0 my-1'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-sm truncate'>
                {description}
              </p>
            </div>
            <div className='hidden lg:block'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850 text-sm'
                href=''>
                Learn more
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className='md:w-95p border lg:border-none rounded g:rounded-none border-gray-300 shadow-md lg:shadow-none flex md:flex-col mb-4'>
          <div className='w-20 h-20 md:w-full md:h-32 lg:h-48 rounded '>
            <img
              className='h-full w-full rounded rounded-r-none md:rounded-tr md:rounded-b-none lg:rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div>
            <div className='mx-4 lg:ml-0 my-2'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-sm md:text-base text-gray-750'>
                {title}
              </p>
            </div>
            <div className='mx-4 lg:ml-0 my-1'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-sm truncate'>
                {description}
              </p>
            </div>
            <div className='hidden lg:block'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850 text-sm'
                href=''>
                Learn more
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
