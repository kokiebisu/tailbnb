import * as React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const BoldCheckCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='lg:w-1/3 flex items-center mb-12'>
      <div>
        <div className='w-12 h-12'>{children}</div>
      </div>
      <div className='ml-4'>
        <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750'>
          {title}
        </p>
      </div>
    </div>
  );
};
