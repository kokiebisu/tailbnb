import React from 'react';

export default ({ img1, img2, img3, img4, img5 }) => {
  return (
    <div className='flex flex-wrap justify-start items-start'>
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className='border border-gray-100 w-1/2 h-2/3 relative bg-cover bg-no-repeat bg-blue'
      />
      <div className='w-1/2 h-2/3 relative'>
        <div className='w-full h-full md:flex items-start justify-start flex-wrap'>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className='w-full border border-gray-300 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat'
          />
          <div
            style={{ backgroundImage: `url(${img3})` }}
            className='w-full border border-gray-300 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat'
          />
          <div
            style={{ backgroundImage: `url(${img4})` }}
            className='hidden md:block border border-gray-300 w-1/2 h-1/2 relative bg-cover bg-no-repeat'
          />
          <div
            style={{ backgroundImage: `url(${img5})` }}
            className='hidden md:block border border-gray-300 w-1/2 h-1/2 relative bg-cover bg-no-repeat'
          />
        </div>
      </div>
    </div>
  );
};
