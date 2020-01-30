import TopRatedCard from '../components/TopRatedCard';

export default () => {
  return (
    <div className='xl:max-w-layout lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Top-rated experiences
      </h3>
      <p className='mb-6'>
        Book activities led by local hosts on your next trip.
      </p>
      <TopRatedCard />
    </div>
  );
};
