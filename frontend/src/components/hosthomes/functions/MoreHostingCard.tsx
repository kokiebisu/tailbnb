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
        <div>
          <div className='w-full h-48'>
            <img
              className='h-full w-full rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div className='my-2'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              {title}
            </p>
          </div>
          <div className='my-1'>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-sm'>
              {description}
            </p>
          </div>
          <div>
            <a
              style={{ fontFamily: 'airbnb-book' }}
              className='text-green-850 text-sm'
              href=''>
              Learn more
            </a>
          </div>
        </div>
      ) : (
        <div className='w-95p'>
          <div className='w-full h-48'>
            <img
              className='h-full w-full rounded object-cover'
              src={img}
              alt=''
            />
          </div>
          <div className='my-2'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
              {title}
            </p>
          </div>
          <div className='my-1'>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-sm'>
              {description}
            </p>
          </div>
          <div>
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
