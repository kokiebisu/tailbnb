import * as React from 'react';

interface Props {
  title: string;
  description: string;
  order?: string | undefined;
}

export const KeepInMindCard: React.FC<Props> = ({
  title,
  description,
  order
}) => {
  return (
    <>
      {order === 'top' ? (
        <div className='w-full flex pb-6 pt-6'>
          <div className='w-full md:w-1/3 h-full items-center'>
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='pt-2 text-lg lg:text-2xl'>
              {title}
            </h3>
          </div>

          <div className='w-2/3 pl-4'>
            <p
              className='hidden lg:block'
              style={{ fontFamily: 'airbnb-book' }}>
              {description}
            </p>
            <button
              style={{ fontFamily: 'airbnb-medium' }}
              className='hidden lg:block text-green-850 text-sm my-3'>
              Learn more
            </button>
          </div>
        </div>
      ) : (
        <>
          {order === 'bottom' ? (
            <div className='w-full flex pb-6 pt-6'>
              <div className='w-1/3'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-lg lg:text-2xl'>
                  {title}
                </h3>
              </div>
              <div className='w-2/3 pl-4'>
                <p
                  className='hidden lg:block'
                  style={{ fontFamily: 'airbnb-book' }}>
                  {description}
                </p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='hidden lg:block text-green-850 text-sm my-3'>
                  Learn more
                </button>
              </div>
            </div>
          ) : (
            <div className='w-full flex pb-6 pt-6'>
              <div className='w-1/3'>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-lg lg:text-2xl'>
                  {title}
                </h3>
              </div>
              <div className='w-2/3 pl-4'>
                <p
                  className='hidden lg:block'
                  style={{ fontFamily: 'airbnb-book' }}>
                  {description}
                </p>
                <button
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='hidden lg:block text-green-850 text-sm my-3'>
                  Learn more
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
