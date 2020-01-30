import TopRatedCard from '../components/TopRatedCard';

import img1 from '../public/adventures1.jpg';
import ShowAll from './ShowAll';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Top-rated experiences
      </h3>
      <p className='mb-6'>
        Book activities led by local hosts on your next trip.
      </p>
      <div className='flex items-start justify-start'>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={img1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={img1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={img1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={img1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
          />
        </div>
      </div>
      <ShowAll title='Show all experiences' />
    </div>
  );
};
