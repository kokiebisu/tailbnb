import * as React from 'react';

interface Prop {
  img: string;
}

export const PlusCard: React.FC<Prop> = ({ img }) => {
  return (
    <div className='w-full cursor pointer'>
      <img
        className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
        src={img}
      />
    </div>
  );
};
