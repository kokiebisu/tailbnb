// Component
import Header from '../components/Header';
import Explore from '../components/Explore';

import img1 from '../public/plus-1.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Explore />
      <div class='xl:max-x-layout lg:max-w-5.5xl mx-auto mt-10 mb-32'>
        <h3 className='text-xl font-medium pb-1 '>
          Airbnb Plus places to stay
        </h3>
        <p>A selection of places to stay verified for quality and design.</p>
        <div className='w-full'>
          <img
            className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
            src={img1}
            alt='plus1'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
