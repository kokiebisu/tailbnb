import React from 'react';

// Image
import img1 from '../../../public/img/high/airbnb-background.jpg';

export default () => {
  const renderDescription = (description) => {
    const wordArray = description.split(' ');
    if (wordArray.length < 50) {
      return <p className='text-gray-750'>description</p>;
    } else {
      const wordArray = description.split(' ');
      const newArray = [];
      for (let i = 0; i < 50; i++) {
        newArray.push(wordArray[i]);
      }
      return (
        <>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {`${newArray.join(' ')}...`}
            <a
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-green-850 border-b text-green-850 border-transparent'
              href='/#'>
              Read More
            </a>
          </p>
        </>
      );
    }
  };

  const description =
    "As we pulled into the driveway, we knew it was an incredible place. Maria and Alberto were the perfect hosts and toured us around their beautiful property. I'm not sure you will believe how amazing it is. We have spent 10 days in Portugal and the time in Penafiel has been the...";
  return (
    <div className='w-25/31 py-6'>
      <div className='flex items-center justify-start pb-4'>
        <img className='h-14 w-14 rounded-full' src={img1} />
        <div className='ml-4 pb-4 flex items-center'>
          <div className='flex flex-col items-start'>
            <p
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-gray-750'>
              Maureen
            </p>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-sm text-gray-750'>
              October 2019
            </p>
          </div>
        </div>
      </div>
      {renderDescription(description)}
    </div>
  );
};
