import * as React from 'react';

// Component
import { HomeCard } from '../../functions/HomeCard';

// Wrapper
import { DetailSectionOverflow } from '../../wrapper/DetailSectionOverflow';
// import { gql } from 'apollo-boost';

export const MoreHomes: React.FC<{}> = () => {
  // const GET_MORE_HOMES = gql`
  //   query Stay($id: ID!) {
  //     stay(where: { id: $id }) {
  //      id
  //       picture_url
  //       name
  //       reviews_per_month
  //       number_of_reviews
  //       beds
  //     }
  //   }
  // `;

  return (
    <DetailSectionOverflow title='More places to stay'>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full'>
              <div className='w-full lg:w-1/3 pb-5 mr-2'>
                <HomeCard />
              </div>
              <div className='w-full lg:w-1/3 pb-5 mr-2'>
                <HomeCard />
              </div>
              <div className='w-full lg:w-1/3 pb-5 mr-2'>
                <HomeCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailSectionOverflow>
  );
};
