// Component
import AdventureCard from '../components/AdventureCard';

// Images
import img1 from '../public/adventures1.jpg';
import img2 from '../public/adventures2.jpg';
import img3 from '../public/adventures3.jpg';
import img4 from '../public/adventures4.jpg';

export default () => {
  return (
    <div className='xl:max-x-layout lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-xl font-medium py-1 mt-5'>
        Introducing Airbnb Adventures
      </h3>
      <p className='mb-6'>
        Multi-day trips led by local experts—activities, meals, and stays
        included
      </p>
      <div className='flex items-start justify-start flex-wrap'>
        <div className='w-1/4'>
          <AdventureCard img={img1} />
        </div>
        <div className='w-1/4'>
          <AdventureCard img={img2} />
        </div>
        <div className='w-1/4'>
          <AdventureCard img={img3} />
        </div>
        <div className='w-1/4'>
          <AdventureCard img={img4} />
        </div>
      </div>
    </div>
  );
};
