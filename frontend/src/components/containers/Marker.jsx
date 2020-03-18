import React from 'react';
const locationmarker = require('../../../public/img/high/location-pointer.png');

const Marker = ({ color, name, id }) => {
  return (
    <div
      className='flex items-center justify-center rounded-full bg-gray-850 w-14 h-14 cursor-pointer'
      title={name}>
      <div style={{ top: 2 }} className='relative'>
        <img className='w-full h-full' src={locationmarker} alt='' />
      </div>
    </div>
  );
};

export default Marker;
