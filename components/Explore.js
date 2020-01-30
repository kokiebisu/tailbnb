import img1 from '../public/experience1.jpg';
import img2 from '../public/experience2.jpg';
import img3 from '../public/experience3.jpg';

import ExploreCard from './ExploreCard';

export default () => {
  return (
    <div className='xl:max-w-layout lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>Explore Airbnb</h3>
      <div className='flex flex-wrap items-center justify-start w-full'>
        <ExploreCard img={img1} title='Stays' />
        <ExploreCard img={img2} title='Experiences' />
        <ExploreCard img={img3} title='Adventures' />
      </div>
    </div>
  );
};
