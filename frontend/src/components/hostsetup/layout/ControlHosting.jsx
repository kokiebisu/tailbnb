import * as React from 'react';
import { ControlHostCard } from '../functions/ControlHostCard';

export const ControlHosting = () => {
  return (
    <>
      <div className='bg-red-550 w-full lg:max-w-5xl mx-auto'>
        <div className='mb-4 md:mb-0 flex md:justify-center'>
          <div
            style={{ width: 70, height: 2 }}
            className='bg-gray-650 rounded-lg'></div>
        </div>
        <div className='flex md:justify-center mb-12 mt-2'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-4xl lg:text-6xl tracking-tighter'>
            Control how you host
          </h3>
        </div>
        <div>
          <div>
            <div className='flex'>
              <ControlHostCard />
              <ControlHostCard />
            </div>
          </div>
          <div>
            <div className='flex'>
              <ControlHostCard />
              <ControlHostCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
