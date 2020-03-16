import * as React from 'react';

// Layout
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { HeaderCategory } from '../../components/layout/HeaderCategory';
import LocationExperiences from '../../components/containers/LocationExperiences';
import LocationStays from '../../components/containers/LocationStays';
import { EarnHosting } from '../../components/layout/EarnHosting';

// Layout
import { MovePage } from '../../components/layout/MovePage';
import { NewFooter } from '../../components/layout/NewFooter';

const uniqueplacesContent = [
  {
    img:
      'https://a0.muscache.com/im/pictures/0e25bbd4-d081-4bab-85de-a8fd05245b53.jpg?aki_policy=large',
    category: '1,910 Treehouses',
    title: 'Get some perspective',
    description:
      'Take your trip to new heights with these one-of-a-kind treehouses.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/1df93d87-26a5-4c5e-8a91-b37ccb173aa1.jpg?aki_policy=large',
    category: '2000+ Boats',
    title: 'Sail the high seas',
    description:
      'Follow in the footsteps of adventurers past with boats of all shapes and sizes.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/408ad1e8-0367-4cb7-be52-6d7bfcc9d046.jpg?aki_policy=large',
    category: '1,820 Yurts',
    title: 'Made just for glamping',
    description: 'Embrace a mix of indoor comfort and the great outdoors.'
  }
];

const newyorkContent = [
  {
    img:
      'https://a0.muscache.com/im/pictures/599f9600-ef4a-4bc6-a43c-eedf35926ed3.jpg?aki_policy=large',
    category: 'Stays + Experiences',
    title: 'Classic NYC',
    description:
      'The quintessential American city, NYC is hip-hop’s birthplace and the home of Broadway — explore the cultural capital with Airbnb.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/e5ecf22b-0018-49e7-a392-e2c78a449fff.jpg?aki_policy=large',
    category: 'Stays + Experiences',
    title: 'Secrets of Old New York',
    description:
      'Beyond the trendy shops and bars, there is old-school NYC—filled with landmarks and totems that connect the modern city to the past.'
  },
  {
    img:
      'https://a0.muscache.com/im/pictures/28b8083f-9169-4fae-8e14-23e2ce1562e9.jpg?aki_policy=large',
    category: 'Stays + Experiences',
    title: 'A Taste of NYC',
    description:
      "A city that's home to 3 million immigrants and over 25,000 restaurants can only be one thing—diversely delicious."
  }
];

const six = () => {
  return (
    <>
      <ExploreHeader white={true} placeholder='Try "Barcelona"' />
      <HeaderCategory dates={true} guests={true} />
      <LocationStays location='Sydney' />
      <LocationExperiences location='London' />
      <LocationStays location='London' />
      <EarnHosting location='Vancouver' />
      <div className='py-16 md:py-24 lg:py-32'>
        <MovePage
          page={6}
          previousPage='five'
          nextPage={null}
          first={false}
          last={false}
        />
      </div>
      <NewFooter />
    </>
  );
};

export default six;
