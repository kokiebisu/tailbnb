import React from 'react';

const Marker = ({ color, name, id }) => {
  return (
    <div
      className='rounded-full bg-black w-6 h-6'
      style={{ cursor: 'pointer' }}
      title={name}
    />
  );
};

export default Marker;
