import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import withSize from 'react-sizeme';

import { renderSkeletonHorizontal } from '../../util/RenderSkeleton';

// Component
import { THundredPlusCard } from '../functions/THundredPlusCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { ExploreSection } from '../wrapper/ExploreSection';

const staydata = gql`
  query {
    stays {
      id
      name
      host_is_superhost
      size
      country
      name
      price
      reviews_per_month
      number_of_reviews
      picture_url
    }
  }
`;

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    console.log(data);
    content.push(
      <div className='pb-5'>
        <THundredPlusCard
          key={i}
          id={data?.stays[i].id}
          host_is_superhost={data?.stays[i].host_is_superhost}
          country={data?.stays[i].country}
          name={data?.stays[i].name}
          price={data?.stays[i].price}
          reviews_per_month={data?.stays[i].reviews_per_month}
          picture_url={data?.stays[i].picture_url}
        />
      </div>
    );
  }
  return content;
};

const THundredPlus = ({ size }) => {
  const { loading, error, data } = useQuery(staydata);

  if (error) return `Error! ${error.message}`;

  if (data) {
    console.log(data);
  }

  return (
    <>
      <ExploreSection title='300+ places to stay'>
        {loading ? (
          <div className='grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full'>
            {size.width < 767 ? renderSkeletonHorizontal(4, true) : null}
            {size.width >= 767 && size.width < 1023
              ? renderSkeletonHorizontal(3, true)
              : null}
            {size.width >= 1023 && size.width < 1279
              ? renderSkeletonHorizontal(6, true)
              : null}
            {size.width >= 1279 && size.width < 1529
              ? renderSkeletonHorizontal(6, true)
              : null}
            {size.width >= 1529 ? renderSkeletonHorizontal(8, true) : null}
          </div>
        ) : (
          data && (
            <div className='grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full'>
              {size.width < 767 ? renderContent(data, 4) : null}
              {size.width >= 767 && size.width < 1023
                ? renderContent(data, 3)
                : null}
              {size.width >= 1023 && size.width < 1279
                ? renderContent(data, 6)
                : null}
              {size.width >= 1279 && size.width < 1529
                ? renderContent(data, 6)
                : null}
              {size.width >= 1529 ? renderContent(data, 8) : null}
            </div>
          )
        )}
        <ShowAll title='Show(2000+)' />
      </ExploreSection>
    </>
  );
};

export default withSize()(THundredPlus);
