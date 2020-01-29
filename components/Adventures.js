// Component
import AdventureCard from '../components/AdventureCard';

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
        <AdventureCard />
      </div>
    </div>
  );
};
