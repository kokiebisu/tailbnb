import * as React from 'react';
import { HostSection } from '../../host/wrapper/HostSection';
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

export const HostAbout: React.FC<{}> = () => {
  return (
    <HostSection title='About Airbnb'>
      <div className='lg:flex'>
        <div>
          <CharacteristicCard
            children={null}
            title='What is Airbnb?'
            description='Airbnb connects people with places to stay and things to do around the world. The community is powered by hosts, who provide their guests with the unique opportunity to travel like a local.'
            link={null}
          />
        </div>
        <div>
          <CharacteristicCard
            children={null}
            title='What is hosting?'
            description='If you have an extra room, entire home, or expertise, you can earn money by sharing it with anyone in the world. You can host your home, activity, or do both. When you host is up to you.'
            link='Learn more about experience hosting'
          />
        </div>
      </div>
    </HostSection>
    // <div className='w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto py-8 md:pb-32 md:pt-8 md:py-0'>
    //   <div className='flex md:justify-center'>
    //     <div
    //       style={{ width: 70, height: 2 }}
    //       className='bg-gray-650 rounded-lg'></div>
    //   </div>

    //   <div className='flex md:justify-center mb-12 mt-2'>
    //     <h3
    //       style={{ fontFamily: 'airbnb-bold' }}
    //       className='text-gray-750 text-4xl lg:text-6xl tracking-tight'>
    //       About Airbnb
    //     </h3>
    //   </div>

    //   <div className='lg:flex'>
    //     <div className='mb-12 lg:mb-0'>
    //       <div className='pb-6'>
    //         <h3
    //           style={{ fontFamily: 'airbnb-bold' }}
    //           className='text-2xl text-gray-750'>
    //           What is Airbnb?
    //         </h3>
    //       </div>
    //       <div className='lg:w-90p'>
    //         <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
    //           Airbnb connects people with places to stay and things to do around
    //           the world. The community is powered by hosts, who provide their
    //           guests with the unique opportunity to travel like a local.
    //         </p>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='pb-6'>
    //         <h3
    //           style={{ fontFamily: 'airbnb-bold' }}
    //           className='text-2xl text-gray-750'>
    //           What is hosting?
    //         </h3>
    //       </div>
    //       <div className='lg:w-90p'>
    //         <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
    //           If you have an extra room, entire home, or expertise, you can earn
    //           money by sharing it with anyone in the world. You can host your
    //           home, activity, or do both. When you host is up to you.
    //         </p>
    //       </div>
    //       <div className='mt-5 lg:mt-4'>
    //         <a
    //           style={{ fontFamily: 'airbnb-book' }}
    //           className='text-green-850'
    //           href=''>
    //           Learn more about experience hosting
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
