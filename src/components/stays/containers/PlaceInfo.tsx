import * as React from 'react';

interface Data {
  data: StayData;
}

interface StayData {
  stay: Stay;
}

interface Stay {
  picture_url: string;
  name: string;
  street: string;
  reviews_per_month: number;
  number_of_reviews: number;
  country: string;
  size: string;
  description: string;
  space: string;
  access: string;
  notes: string;
  host_name: string;
  hostDescription: string;
  host_since: string;
  duringStay: string;
  host_is_superhost: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_response_rate: string;
  host_response_time: string;
  accommodates: number;
  beds: number;
  bedrooms: number;
  bathrooms: number;
}

export const PlaceInfo: React.FC<Data> = ({ data }) => {
  return (
    <div className='flex items-center justify-between border-b border-gray-200 mt-4'>
      <div className='flex justify-start w-9/12 py-4'>
        <div className='mt-4 flex items-start justify-center'>
          <div className='flex flex-col '>
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-md lg:text-2xl text-gray-850 leading-none'>
              {data.stay.size} hosted by {data.stay.host_name}
            </h3>
            <div
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 pt-1 pb-3 flex justify-start items-start flex-wrap'>
              <div className='mr-4'>
                <p>
                  {data.stay.accommodates}{' '}
                  {data.stay.accommodates > 1 ? 'guests' : 'guest'}
                </p>
              </div>
              <div className='mr-4'>
                <p>
                  {data.stay.bedrooms}{' '}
                  {data.stay.bedrooms > 1 ? 'bedrooms' : 'bedroom'}
                </p>
              </div>
              <div className='mr-4'>
                <p>
                  {data.stay.beds} {data.stay.beds > 1 ? 'beds' : 'bed'}
                </p>
              </div>
              <div className='mr-4'>
                <p>
                  {data.stay.bathrooms}{' '}
                  {data.stay.bathrooms > 1 ? 'baths' : 'bath'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end items-start w-3/12'>
        <img
          className='h-16 w-16 rounded-full'
          src={data.stay.host_picture_url}
        />
      </div>
    </div>
  );
};
