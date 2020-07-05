import * as React from 'react';

interface Prop {
  title: string;
  children: React.ReactNode;
}

export const DetailSection: React.FC<Prop> = ({ title, children }) => {
  return (
    <div className='border-b border-gray-300 pt-4 pb-14 w-full'>
      <div className='pb-8'>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='text-2xl my-4 text-gray-850'>
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};
