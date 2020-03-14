import * as React from 'react';

export const WhatsAnExperience = () => {
  return (
    <>
      <div
        id='hostexperience__what-bottom'
        className='relative w-screen h-screen bg-transparent'>
        <div className='w-full absolute bottom-0 flex items-center justify-center h-48'>
          <div>
            <div className='my-2'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-white text-5xl tracking-tight'>
                What's an experience?
              </h3>
            </div>
            <div className='w-80p'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-white text-sm'>
                It’s an activity that goes beyond the typical tour or class,
                designed and led by locals all over the world. Show off your
                city, craft, cause, or culture by hosting an experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
