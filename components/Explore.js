import explore1 from '../public/img/explore-1.jpg';
import explore2 from '../public/img/explore-2.jpg';
import explore3 from '../public/img/explore-3.jpg';

import ExploreCard from './ExploreCard';

export default () => {
  return (
    <div className='flex items-center justify-start flex-wrap'>
      <div className='w-1/3'>
        <ExploreCard img={explore1} title='Stays' />
      </div>
      <div className='w-1/3'>
        <ExploreCard img={explore2} title='Experiences' />
      </div>
      <div className='w-1/3'>
        <ExploreCard img={explore2} title='Adventures' />
      </div>
    </div>
  );
};
