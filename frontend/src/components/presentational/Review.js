import React from 'react';

// Image
import img1 from '../../../public/img/high/airbnb-background.jpg';

export default () => {
  return (
    <div className='py-6 border-b border-gray-300'>
      <div className='flex items-center justify-start'>
        <img className='h-12 w-12 rounded-full' src={img1} />
        <div>
          <p className='font-semibold'>Maureen</p>
          <p>October 2019</p>
        </div>
      </div>
      <p>
        As we pulled into the driveway, we knew it was an incredible place.
        Maria and Alberto were the perfect hosts and toured us around their
        beautiful property. I'm not sure you will believe how amazing it is. We
        have spent 10 days in Portugal and the time in Penafiel has been the...
        <a className='text-green-500' href='/#'>
          hello
        </a>
      </p>
    </div>
  );
};
