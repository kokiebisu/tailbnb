import * as React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const HostSection: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16'>
      <div className='my-8'>
        <div className='mb-4 md:mb-0 flex md:justify-center'>
          <div
            style={{ width: 70, height: 2 }}
            className='bg-gray-650 rounded-lg'></div>
        </div>

        <div className='flex md:justify-center mb-12 mt-2'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-4xl lg:text-6xl tracking-tight'>
            {title}
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
};
