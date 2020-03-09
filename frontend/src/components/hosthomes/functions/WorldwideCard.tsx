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
        <h3 className='text-6xl text-gray-850'>{title}</h3>
      </div>
      <div>
        <p className='text-gray-750'>{description}</p>
      </div>
    </div>
  );
};
