import * as React from 'react';

export const QuestionCard = ({ title, description, link }) => {
  return (
    <div className='border-b border-gray-300'>
      <div className='py-8'>
        <div>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-gray-750 text-lg'>
            {title}
          </h3>
        </div>
        <div>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {description}
            {link ? <span className='text-green-850'>{link}</span> : null}
          </p>
        </div>
      </div>
    </div>
  );
};
