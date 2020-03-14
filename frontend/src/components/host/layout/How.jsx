import * as React from 'react';

export const How = ({ page, title, description, img }) => {
  return (
    <div>
      <div style={{ bottom: 30 }} className='bg-gray-100 relative'>
        <div className='mt-8 md:mt-0 w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5.5xl mx-auto pt-16 pb-16'>
          <div className='w-full lg:max-w-4xl mx-auto md:mt-12 lg:mt-0'>
            <div className='flex flex-col items-start md:items-center'>
              <div className='my-4'>
                <p
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 uppercase text-sm'>
                  {page}
                </p>
              </div>
              <div className='mb-8'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-4xl md:text-5xl lg:text-6xl tracking-tighter'>
                  {title}
                </h3>
              </div>
              <div className='w-85p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-lg lg:text-2xl text-gray-750 leading-7 md:text-center'>
                  {description}
                </p>
              </div>
              <div className='mt-12 lg:mt-16 mb-28'>
                <button
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='bg-red-550 px-5 py-3 text-white rounded'>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {img && (
        <div
          style={{ bottom: 120 }}
          className='w-full max-w-2xl lg:max-w-5xl mx-auto relative'>
          <div className='flex justify-center'>
            <div className='mx-6 md:mx-0 w-full md:h-80 lg:h-112'>
              <img className='w-full h-full object-cover' src={img} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
