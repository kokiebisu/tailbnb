import React from 'react';

// Container
import { StayDescription } from './StayDescription';

export default ({ data, setLength }) => {
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
