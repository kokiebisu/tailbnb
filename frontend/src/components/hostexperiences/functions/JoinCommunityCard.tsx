import * as React from 'react';

interface Props {
  img: string;
  title: string;
  description: string;
  color: string;
}

export const JoinCommunityCard: React.FC<Props> = ({
  img,
  title,
  description,
  color
}) => {
  return (
    <div style={{ backgroundColor: color }}>
      <div className='p-6'>
        <div>
          <img className='w-full h-full' src={img} />
        </div>
        <div className='mt-10 mb-2'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl text-gray-750'>
            {title}
          </h3>
        </div>
        <div>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {description}
          </p>
        </div>
        <div className='pt-6'>
          <p style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
            View experience
          </p>
        </div>
      </div>
    </div>
  );
};
