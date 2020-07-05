import * as React from 'react';

interface Props {
  title: string;
  description: string;
}

export const StatsCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      style={{ fontFamily: 'airbnb-book' }}
      className='w-full md:w-1/3 flex flex-col md:items-center mb-8 md:mb-0'>
      <div>
        <h3 className='text-4xl text-gray-750 lg:text-6xl text-gray-850'>
          {title}
        </h3>
      </div>
      <div className='w-80p'>
        <p className='text-sm lg:text-base text-gray-750 md:text-center'>
          {description}
        </p>
      </div>
    </div>
  );
};
