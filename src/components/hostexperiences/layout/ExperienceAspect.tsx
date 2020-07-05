import * as React from 'react';

interface Props {
  img: string;
  position: string;
  title: string;
  description: string;
}

const renderByPosition = (
  img: string,
  position: string,
  title: string,
  description: string
) => {
  switch (position) {
    case 'left':
      return (
        <>
          <div className='md:w-2/5'>
            <img src={img} className='w-full h-full' />
          </div>
          <div className='md:w-3/5 '>
            <div className='flex flex-col justify-center md:items-end lg:items-center h-full'>
              <div className='w-80p md:w-70p'>
                <div className='mt-6 mb-2 md:mt-0 md:mb-0'>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-4xl md:text-5xl tracking-tight leading-12 text-white'>
                    {title}
                  </h3>
                </div>
                <div className='flex justify-end mt-8'>
                  <div className='lg:w-80p'>
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
          <div className='md:w-3/5'>
            <div className='flex flex-col justify-center items-start h-full'>
              <div className='lg:w-70p'>
                <div className='mt-6 mb-2 md:mt-0 md:mb-0'>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-4xl md:text-5xl tracking-tight leading-12 text-white'>
                    {title}
                  </h3>
                </div>
                <div className='flex lg:justify-end mt-8'>
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
          <div className='md:w-2/5'>
            <img src={img} className='w-full h-full' />
          </div>
        </>
      );
  }
};

export const ExperienceAspect: React.FC<Props> = ({
  img,
  position,
  title,
  description
}) => {
  return (
    <div className='px-12 md:px-0 md:max-w-xl lg:max-w-5.5xl mx-auto flex items-center'>
      {position === 'left' ? (
        <div className='md:flex justify-center'>
          {renderByPosition(img, position, title, description)}
        </div>
      ) : (
        <div className='flex flex-col-reverse md:flex-row justify-center'>
          {renderByPosition(img, position, title, description)}
        </div>
      )}
    </div>
  );
};
