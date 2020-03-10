import * as React from 'react';

interface Props {
  title: string;
  description: string;
}

export const WorldwideCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      style={{ fontFamily: 'airbnb-book' }}
      className='w-1/3 flex flex-col items-center'>
      <div>
        <h3 className='md:text-4xl md:text-gray-750 lg:text-6xl text-gray-850'>
          {title}
        </h3>
      </div>
      <div className='w-80p'>
        <p className='md:text-sm lg:text-base text-gray-750 text-center'>
          {description}
        </p>
      </div>
    </div>
  );
};
