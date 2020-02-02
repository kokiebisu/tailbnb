import explore1 from '../public/explore-1.jpg';
import explore2 from '../public/explore-2.jpg';
import explore3 from '../public/explore-3.jpg';

import ExploreCard from './ExploreCard';

export default () => {
  return (
    <div className='flex flex-wrap items-center justify-start w-full'>
      <ExploreCard img={explore1} title='Stays' />
      <ExploreCard img={explore2} title='Experiences' />
      <ExploreCard img={explore3} title='Adventures' />
    </div>
  );
};
