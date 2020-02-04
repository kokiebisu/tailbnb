import React from 'react';

export default ({ img, verified, description }) => {
  return (
    <div className='w-30/31'>
      <div className='h-full w-64 sm:w-full bg-white'>
        <img className='rounded-xl' src={img} alt='adventure1' />
        <div className='flex flex-wrap items-center justify-start'>
          <p className='uppercase text-xs my-2 font-bold text-pink-700'>
            {verified}+ Verified Stays
          </p>
        </div>
        <p className='whitespace-normal my-1 text-sm tracking-wide'>
          {description}
        </p>
      </div>
    </div>
  );
};
