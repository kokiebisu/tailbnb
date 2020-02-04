import React from 'react';

export default ({ img, title }) => {
  return (
    <div className='w-30/31'>
      <div className='h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
        <img
          src={img}
          className='h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none'
          alt='explore1'
        />
        <p class='text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold'>
          {title}
        </p>
      </div>
    </div>
  );
};
