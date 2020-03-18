import * as React from 'react';
import MapContainer from './MapContainer';

export const WhereYouWillBe = () => {
  return (
    <div className='px-6 md:px-12 lg:px-0 lg:max-w-6xl mx-auto py-16'>
      <div
        style={{ fontFamily: 'airbnb-bold' }}
        className=' md:mb-0 w-full md:w-4/12 md:h-full'>
        <h3 className='lg:w-2/3 text-2xl md:text-3xl text-gray-750'>
          Where you'll be
        </h3>
      </div>
      <div className='mt-16 w-full'>
        <div className='w-full h-72 md:h-144'>
          <MapContainer lat={11.0168} lng={76.9558} />
        </div>
      </div>
    </div>
  );
};
