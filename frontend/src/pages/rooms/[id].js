import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import ExploreHeader from '../../components/layout/ExploreHeader';
import ImagePanel from '../../components/cards/ImagePanel';

// Images
import detail1 from '../../../public/img/high/staydetail1.jpg';
import detail2 from '../../../public/img/high/staydetail2.jpg';
import detail3 from '../../../public/img/high/staydetail3.jpg';
import detail4 from '../../../public/img/high/staydetail4.jpg';
import detail5 from '../../../public/img/high/staydetail5.jpg';

const staydata = gql`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;

export default () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(staydata, {
    variables: {
      id: router.query.id
    }
  });

  if (loading) return 'loading...';
  if (error) return 'error...';
  return (
    <>
      <ExploreHeader />
      <ImagePanel
        img1={detail1}
        img2={detail2}
        img3={detail3}
        img4={detail4}
        img5={detail5}
      />
      <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='bg-blue-500 w-4/6'>
          <div className='flex items-start justify-between'>
            <div>
              <h3 className='text-3xl font-semibold'>
                Douro Villa with swimming pool, Penafiel, Portugal
              </h3>
              <p>Penafiel</p>
            </div>
            <div className='bg-red-500'>
              <img className='h-12 w-12 rounded-full' src={detail1} />
              <p>Maria Henriqueta</p>
            </div>
          </div>
        </div>
        <div>what</div>
      </div>
    </>
  );
};
