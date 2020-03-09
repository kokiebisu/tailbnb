import * as React from 'react';

interface Props {
  title: string;
  description: string;
  links?: String;
  last: boolean;
}

export const SimplePaymentsCard: React.FC<Props> = ({
  title,
  description,
  links,
  last
}) => {
  return (
    <div className='md:w-full lg:w-1/3 md:mb-16 lg:mb-0'>
      {last ? (
        <div className='text-gray-750'>
          <div className='my-3'>
            <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='leading-relaxed'>
              {description}
            </p>
          </div>
          {links ? (
            <div className='mt-5'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850'
                href=''>
                {links}
              </a>
            </div>
          ) : null}
        </div>
      ) : (
        <div className='w-85p text-gray-750'>
          <div className='my-3'>
            <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='leading-relaxed'>
              {description}
            </p>
          </div>
          {links ? (
            <div className='mt-5'>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='text-green-850'
                href=''>
                {links}
              </a>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
