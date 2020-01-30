// Component
import FeaturedCard from '../components/FeaturedCard';

import featured1 from '../public/featured-1.jpg';
import featured2 from '../public/featured-2.jpg';
import featured3 from '../public/featured-3.jpg';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-4xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Featured Airbnb Plus destinations
      </h3>
      <p className='mb-6 text-gray-650'>
        Browse beautiful places to stay with all the comforts of home, plus more
      </p>
      <div className='flex flex-wrap items-start justify-start w-full'>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={featured1}
            verified='940'
            description='Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
          />
        </div>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={featured2}
            verified='300'
            description='Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
          />
        </div>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={featured3}
            verified='290'
            description='Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
          />
        </div>
      </div>
    </div>
  );
};
