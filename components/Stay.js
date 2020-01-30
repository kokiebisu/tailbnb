// Component
import StayCard from '../components/StayCard';
import ShowAll from '../components/ShowAll';

// Images
import stay1 from '../public/stay-1.jpg';
import stay2 from '../public/stay-2.jpg';
import stay3 from '../public/stay-3.jpg';
import stay4 from '../public/stay-4.jpg';
import stay5 from '../public/stay-5.jpg';
import stay6 from '../public/stay-6.jpg';
import stay7 from '../public/stay-7.jpg';
import stay8 from '../public/stay-8.jpg';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Places to stay around the world
      </h3>
      <div className='flex flex-wrap items-center justify-start w-full'>
        <div className='w-1/4 py-5'>
          <StayCard
            type='normal'
            img={stay1}
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='91'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='superhost'
            img={stay2}
            location='Makawao'
            title='Adorable Garden Gingerbread...'
            price='257'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='superhost'
            img={stay3}
            location='Roma Norte'
            title='Radiant Apartment with Terrace in...'
            price='104'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='superhost'
            img={stay4}
            location='Portici'
            title='Villa San Gennariello'
            price='87'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='plus'
            img={stay5}
            location='Old Town'
            title='Classical Apartment on the Royal...'
            price='206'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='normal'
            img={stay6}
            location='Porto'
            title='PORTA33 | PORTO PENTHOUSE...'
            price='126'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='superhost'
            img={stay7}
            location='Krakow'
            title='Amazing and Extremely Central Flat'
            price='31'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            type='superhost'
            img={stay8}
            location='Tricase'
            title='La Salentina, sea, nature & relax'
            price='68'
          />
        </div>
      </div>
      <ShowAll title='Show(2000+)' />
    </div>
  );
};
