// Components
import TopRatedCard from '../components/TopRatedCard';
import ShowAll from './ShowAll';

// Images
import experience1 from '../public/img/experience-1.jpg';
import experience2 from '../public/img/experience-2.jpg';
import experience3 from '../public/img/experience-3.jpg';
import experience4 from '../public/img/experience-4.jpg';

export default () => {
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full'>
        <div className='xl:w-1/4 lg:w-1/3 w-1/2 py-5'>
          <TopRatedCard
            img={experience1}
            location='Italy'
            title='Luca & Lorenzo, cooking in Chianti hills'
            price='172'
            reviews='1765'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/3 w-1/2 py-5'>
          <TopRatedCard
            img={experience2}
            location='Italy'
            title='Truffle experience Rome'
            price='148'
            reviews='621'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/3 w-1/2 py-5'>
          <TopRatedCard
            img={experience3}
            location='Japan'
            title='Feeling Samurai Soul'
            price='119'
            reviews='1047'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/3 w-1/2 py-5'>
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
    </>
  );
};
