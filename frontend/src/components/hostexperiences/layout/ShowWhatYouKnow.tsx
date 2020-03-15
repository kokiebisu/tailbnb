import * as React from 'react';

export const ShowWhatYouKnow: React.FC<{}> = () => {
  return (
    <>
      <div className='relative w-screen bg-white '>
        <div className='px-6 md:px-0 md:max-w-3xl lg:max-w-5xl py-10 md:py-28 mx-auto'>
          <div className='md:flex'>
            <div className='md:w-1/2 mb-4 md:mb-0'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-gray-750 text-3xl'>
                Show what you know
              </h3>
            </div>
            <div className='md:w-1/2'>
              <div className='w-95p'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-lg'>
                  Experiences of every kind, like cooking, crafting, kayaking,
                  and more. There’s no limit to what you can do. Explore these
                  featured categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
