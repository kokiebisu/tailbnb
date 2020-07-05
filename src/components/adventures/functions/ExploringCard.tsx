import * as React from 'react';

interface Props {
  title: string;
  experienceNumber: number;
}

export const ExploringCard: React.FC<Props> = ({ title, experienceNumber }) => {
  return (
    <div className='bg-white shadow-sm rounded mr-4 border border-gray-300 mt-4'>
      <div className='px-5 py-5 mr-5'>
        <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
          {title}
        </h3>
        <p
          style={{ fontFamily: 'airbnb-medium' }}
          className='text-xs text-gray-650'>
          {experienceNumber} experiences
        </p>
      </div>
    </div>
  );
};
