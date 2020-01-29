// Component
import Header from '../components/Header';

import img1 from '../public/experience1.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <div className='xl:max-x-layout lg:max-w-5.5xl max-w-xl mx-auto mt-14 mb-32'>
        <h3 className='text-xl font-medium py-3 mt-5'>Explore Airbnb</h3>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <div className='lg:w-1/3 '>
            <div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-lg bg-white'>
              <img
                src={img1}
                className='rounded-xl rounded-r-none'
                style={{ height: 80, width: 'auto' }}
                alt='explore1'
              />
              <p class='pl-4'>Stays</p>
            </div>
          </div>
          <div className='lg:w-1/3 '>
            <div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-lg bg-white'>
              <img
                src={img1}
                className='rounded-xl rounded-r-none'
                style={{ height: 80, width: 'auto' }}
                alt='explore2'
              />
              <p class='pl-4'>Stays</p>
            </div>
          </div>
          <div className='lg:w-1/3 '>
            <div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-lg bg-white'>
              <img
                src={img1}
                className='rounded-xl rounded-r-none'
                style={{ height: 80, width: 'auto' }}
                alt='explore3'
              />
              <p class='pl-4'>Stays</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
