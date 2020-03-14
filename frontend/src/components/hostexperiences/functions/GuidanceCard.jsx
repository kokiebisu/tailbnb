import * as React from 'react';

export const GuidanceCard = ({ img, title, color }) => {
  return (
    <div className='relative'>
      <div className=''>
        <img className='w-full h-full rounded-3xl' src={img} alt='' />
      </div>
      <div
        style={{ backgroundColor: color }}
        className='w-full h-full absolute top-0 opacity-50 rounded-3xl'></div>
      <div className='absolute bottom-0 p-4'>
        <p style={{ fontFamily: 'airbnb-bold' }} className='text-white'>
          {title}
        </p>
      </div>
    </div>
  );
};
