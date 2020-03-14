import * as React from 'react';

export const ExperienceCategoryCard = ({ img, title, description, color }) => {
  return (
    <>
      <div className='bg-white shadow-xl'>
        <div className='w-full'>
          <img className='w-full h-full' src={img} />
        </div>
        <div className='px-6 pt-8 pb-6'>
          <div>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
              {description}
            </p>
          </div>
          <div className='my-2'>
            <p style={{ fontFamily: 'airbnb-bold', color: color }}>Explore</p>
          </div>
        </div>
      </div>
    </>
  );
};
