// Component
import FeaturedCard from '../components/FeaturedCard';

import img1 from '../public/stay-1.jpg';

export default () => {
  return (
    <div className='xl:max-w-layout lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Featured Airbnb Plus destinations
      </h3>
      <p className='mb-6'>
        Browse beautiful places to stay with all the comforts of home, plus more
      </p>
      <div className='flex flex-wrap items-center justify-start w-full'>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={img1}
            verified='940'
            description='Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
          />
        </div>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={img1}
            verified='940'
            description='Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
          />
        </div>
        <div className='lg:w-1/3'>
          <FeaturedCard
            img={img1}
            verified='940'
            description='Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
          />
        </div>
      </div>
    </div>
  );
};
