import * as React from 'react';

interface Props {
  title: string;
  description: string;
  link: string | null;
}

export const QuestionCard: React.FC<Props> = ({ title, description, link }) => {
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
