import * as React from 'react';

export const HostServicesBanner = () => {
  return (
    <div className='w-full px-6 lg:px-0 lg:max-w-5xl xl:max-w-7xl mx-auto'>
      <div className='w-full lg:mt-16 lg:mb-10 flex flex-col-reverse md:flex-row justify-between'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start text-gray-750'>
          <div className='w-90p'>
            <div className=''>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-4xl lg:text-6xl leading-9 md:leading-16 tracking-tighter'>
                Hosting handled for you
              </h3>
            </div>
            <div className='my-6'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-lg md:text-2xl leading-tight'>
                With hosting services, you get the benefits of sharing your
                space—without the work
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <button className='border-2 border-gray-750 rounded py-2 px-5'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-gray-750'>
                Check availability
              </p>
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <video
            playsInline
            autoPlay
            loop
            className='h-full w-full'
            src='https://cdn.dribbble.com/users/3419830/videos/23722/cyclists.mp4'></video>
        </div>
      </div>
    </div>
  );
};
