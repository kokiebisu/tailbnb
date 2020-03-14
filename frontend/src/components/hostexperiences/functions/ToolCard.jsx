import * as React from 'react';

export const ToolCard = ({ gif, title, color }) => {
  return (
    <div>
      <div
        style={{ borderColor: color }}
        className='py-8 rounded-5xl bg-white flex justify-center items-center border-2'>
        <div className='h-14 w-14'>
          <img className='w-full h-full' src={gif} />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='my-4'>
          <p style={{ fontFamily: 'airbnb-bold', color: color }}>{title}</p>
        </div>
      </div>
    </div>
  );
};
