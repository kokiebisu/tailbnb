import React from 'react';

export default ({ title, children }) => {
  return (
    <div className='border-b border-gray-300 py-4'>
      <h3 className='my-4 font-semibold'>{title}</h3>
      {children}
    </div>
  );
};
