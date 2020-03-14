import * as React from 'react';

const renderByPosition = (img, position, title, description) => {
  switch (position) {
    case 'left':
      return (
        <>
          <div className='w-2/5'>
            <img src={img} className='w-full h-full' />
          </div>
          <div className='w-3/5'>
            <div className='flex flex-col justify-center items-center h-full'>
              <div className='w-70p'>
                <div>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-5xl tracking-tight leading-12 text-white'>
                    {title}
                  </h3>
                </div>
                <div className='flex justify-end mt-8'>
                  <div className='w-80p'>
                    <p
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='text-lg text-white'>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    case 'right':
      return (
        <>
          <div className='w-3/5'>
            <div className='flex flex-col justify-center items-start h-full'>
              <div className='w-70p'>
                <div>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-5xl tracking-tight leading-12 text-white'>
                    {title}
                  </h3>
                </div>
                <div className='flex justify-end mt-8'>
                  <div className='w-80p'>
                    <p
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='text-lg text-white'>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-2/5'>
            <img src={img} className='w-full h-full' />
          </div>
        </>
      );
  }
};

export const ExperienceAspect = ({ img, position, title, description }) => {
  return (
    <div className='lg:max-w-5.5xl mx-auto flex items-center'>
      <div className='flex justify-center'>
        {renderByPosition(img, position, title, description)}
      </div>
    </div>
  );
};
