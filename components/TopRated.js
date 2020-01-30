// Components
import TopRatedCard from '../components/TopRatedCard';
import ShowAll from './ShowAll';

// Images
import experience1 from '../public/experience-1.jpg';
import experience2 from '../public/experience-2.jpg';
import experience3 from '../public/experience-3.jpg';
import experience4 from '../public/experience-4.jpg';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Top-rated experiences
      </h3>
      <p className='mb-6 text-gray-750'>
        Book activities led by local hosts on your next trip.
      </p>
      <div className='flex items-start justify-start flex-wrap'>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={experience1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
            reviews='1765'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={experience2}
            location='Italy'
            title='Truffle experience Rome'
            price='148'
            reviews='621'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={experience3}
            location='Japan'
            title='Feeling Samurai Soul'
            price='119'
            reviews='1047'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <TopRatedCard
            img={experience4}
            location='Italy'
            title='Lisbon best flavors'
            price='90'
            reviews='3733'
          />
        </div>
      </div>
      <ShowAll title='Show all experiences' />
    </div>
  );
};
