import React from 'react';
const locationmarker = require('../../../public/img/high/location-pointer.png');

const Marker = ({ name, id }) => {
  return (
    <>
      {innerWidth > 640 ? (
        <div
          className='flex items-center justify-center rounded-full bg-gray-850 w-14 h-14 cursor-pointer'
          title={name}>
          <div style={{ top: 2 }} className='relative'>
            <img className='w-full h-full' src={locationmarker} alt='' />
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          className='flex items-center justify-center rounded-full border-2 border-gray-750 w-14 h-14 cursor-pointer'
          title={name}></div>
      )}
    </>
  );
};

export default Marker;
