import React from 'react';

export default ({ title }) => {
  return (
    <div className='border-b border-gray-300'>
      <h3 className='my-4 font-semibold'>{title}</h3>
      <div className='flex items-start justify-start flex-wrap'>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
        <div className='bg-blue-500 w-1/2'>Free parking</div>
      </div>
      <p>
        The host hasn't reported smoke or carbon monoxide detectors on the
        property
      </p>
      <a className='text-green-600'>Show all 32 amenities</a>
    </div>
  );
};
