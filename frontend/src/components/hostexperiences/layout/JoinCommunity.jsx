import * as React from 'react';

// Functions
import { JoinCommunityCard } from '../functions/JoinCommunityCard';

// Images
const joincommunity1 =
  'https://a0.muscache.com/im/pictures/b7f0cbdb-2251-4513-b3cc-b93546606c7c.jpg?aki_policy=x_large';
const joincommunity2 =
  'https://a0.muscache.com/im/pictures/ff8d1952-e25c-4df8-889f-a846f7b34897.jpg?aki_policy=x_large';

export const JoinCommunity = () => {
  return (
    <div className='relative w-screen bg-gray-100 pt-2 md:py-16'>
      <div className='px-6 md:max-w-2xl lg:max-w-5xl mx-auto'>
        <div className='md:grid grid-cols-2 lg:items-center my-16'>
          <div className='mb-4 md:mb-0'>
            <div className='w-80p lg:w-1/2'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-3xl text-gray-750 md:leading-9'>
                Join a growing community of curious people
              </h3>
            </div>
          </div>
          <div className=''>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-lg'>
              Hosts are chefs, artists, DJs, and other experts in their fields.
              They make people from around the world feel connected, and give
              access to unique places and activities that can’t be found
              anywhere else.
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-6'>
          <div className='pb-4 md:mb-0'>
            <JoinCommunityCard
              img={joincommunity1}
              title='DJ Jigüe'
              description='DJ Jigüe is dedicated to sharing his passion for Afro-Cuban music. Some of the guests he’s exposed to Cuba’s complex musical history even went to see him play a show in Austin, Texas.'
              color='#dbb9c4'
            />
          </div>
          <div className='pb-4 md:mb-0'>
            <JoinCommunityCard
              img={joincommunity2}
              title='Cici'
              description='Shanghai resident and culinary host Cici believes cooking can bring happiness. She welcomes guests into her kitchen to learn how to make classic Chinese dumplings in a fun way.'
              color='#d3e5e7'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
