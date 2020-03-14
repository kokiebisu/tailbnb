import * as React from 'react';

// Wrappers
import { HostSection } from '../../host/wrapper/HostSection';

// Images
const support1 = require('../../../../public/img/high/hosting-support1.jpg');
const support2 = require('../../../../public/img/high/hosting-support2.jpg');

export const HostingSupport = () => {
  return (
    <HostSection title='Get hosting support'>
      <div className='flex flex-col md:flex-row pb-8'>
        <div className='md:w-2/5'>
          <div>
            <img className='w-full h-full' src={support1} />
          </div>
        </div>
        <div className='md:w-3/5 flex items-center md:justify-center mt-6 md:mt-0'>
          <div className='md:w-70p text-gray-750'>
            <div className='my-2'>
              <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-2xl '>
                Resources throughout
              </h3>
            </div>
            <div>
              <p style={{ fontFamily: 'airbnb-book' }} className=''>
                As a host, the Airbnb community always has your back. For
                helpful tips and suggestions, you’ll find a robust Help Centre,
                375,000 hosts in our Community Centre, and a number of hosting
                tool kits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row md:pb-32'>
        <div className='md:w-3/5 flex items-center md:justify-center mt-6 md:mt-0'>
          <div className='md:w-70p text-gray-750'>
            <div className='my-2'>
              <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-2xl '>
                We're here for you 24/7
              </h3>
            </div>
            <div>
              <p style={{ fontFamily: 'airbnb-book' }}>
                Our global team is standing by 24/7 to support you by phone,
                email, and live chat. The team can help you with everything from
                issues creating your listing to concerns about guests.
              </p>
            </div>
          </div>
        </div>
        <div className='md:w-2/5'>
          <div>
            <img className='w-full h-full' src={support2} />
          </div>
        </div>
      </div>
    </HostSection>
  );
};
