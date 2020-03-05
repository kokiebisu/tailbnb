import * as React from 'react';

export const DateCheck: React.FC<{}> = () => {
  return (
    <div className='bg-white w-screen py-4 sticky bottom-0 z-50 absolute flex justify-between'>
      <div className='flex'>
        <div>img here</div>
        <div className='flex'>
          <p>Sailing Adventures in Howe Sound Fjord</p>
          <div className='flex'>
            <p>4.97</p>
            <div>svg here</div>
          </div>
          <p>(233)</p>
        </div>
      </div>
      <div className='flex'>
        <p>$119/person</p>
        <button>
          <div>
            <p>See dates</p>
          </div>
        </button>
      </div>
    </div>
  );
};
