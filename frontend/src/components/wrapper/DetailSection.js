import React from 'react';

export default ({ title, children }) => {
  return (
    <div className='border-b border-gray-300 pt-2 pb-5'>
      <h3
        style={{ fontFamily: 'airbnb-medium' }}
        className='my-4 font-semibold text-gray-750'>
        {title}
      </h3>
      {children}
    </div>
  );
};
