import React from 'react';
export default () => {
  return (
    <>
      <div>
        <div className='py-4 border-b border-gray-300'>
          <h3>Things to keep in mind</h3>
          <p>
            <span>Check-in:</span> After 4:00 p.m.
          </p>
          <p>
            <span>Checkout:</span> 12:00 p.m.
          </p>
        </div>
        <div className='py-4 border-b border-gray-300'>
          <h3>House Rules</h3>
          <div className='flex items-start justify-start'>
            <div className='flex item-center justify-start w-1/2 bg-blue'>
              <div>svg here</div>
              <p>No parties or events</p>
            </div>
            <div className='flex item-center justify-start w-1/2 bg-blue'>
              <div>svg here</div>
              <p>No parties or events</p>
            </div>
          </div>
          <button>
            <div className='flex items-center justify-start'>
              <p className='text-green-500'>Read all rules</p>
              <div>svg here</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
