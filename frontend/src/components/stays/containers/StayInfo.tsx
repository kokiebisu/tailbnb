import * as React from 'react';

// Container
import { StayDescription } from './StayDescription';

interface Props {
  data: StayData;
  setLength: () => void;
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

export const StayInfo: React.FC<Props> = ({ data, setLength }) => {
  return (
    <div className='border-b border-gray-300'>
      <div className='my-8'>
        {data && (
          <StayDescription
            description={data.stay.description}
            space={data.stay.space}
            access={data.stay.access}
            note={data.stay.notes}
            changeLength={setLength}
          />
        )}
        <div className='my-5'>
          <button>
            <div className='flex items-center justify-start'>
              <p className='' style={{ fontFamily: 'airbnb-medium' }}>
                Any questions for the host?
              </p>
            </div>
          </button>
        </div>
        <div className='mt-10 mb-16'>
          <a
            className='py-3 px-6 border border-black rounded-lg'
            style={{ fontFamily: 'airbnb-medium' }}
            href=''>
            Contact host
          </a>
        </div>
      </div>
    </div>
  );
};
