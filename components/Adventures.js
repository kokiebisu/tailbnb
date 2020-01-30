// Component
import AdventureCard from '../components/AdventureCard';
import ShowAll from '../components/ShowAll';

// Images
import img1 from '../public/adventures1.jpg';
import img2 from '../public/adventures2.jpg';
import img3 from '../public/adventures3.jpg';
import img4 from '../public/adventures4.jpg';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5xl md:max-w-3xl mx-auto mt-20 mb-20'>
      <h3 className='text-2xl font-semibold py-1 mt-5'>
        Introducing Airbnb Adventures
      </h3>
      <p className='mb-6 text-gray-750'>
        Multi-day trips led by local experts—activities, meals, and stays
        included
      </p>
      <div className='flex items-start justify-start'>
        <div className='xl:w-1/4 lg:w-1/2'>
          <AdventureCard
            img={img1}
            location='Norway'
            title='2 Nights PACKAGE All Inclusive'
            price='From $841 / person'
            days='3'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <AdventureCard
            img={img2}
            location='Indonesia'
            title='Snorkeling and hiking in West Sumatra'
            price='From $249 / person'
            days='2'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <AdventureCard
            img={img3}
            location='Nepal'
            title='Trek to the lower Everest region'
            price='From $1,745 / person'
            days='11'
          />
        </div>
        <div className='xl:w-1/4 lg:w-1/2'>
          <AdventureCard
            img={img4}
            location='Morocco'
            title='Active Adventure & Stay with Locals'
            price='From $416 / person'
            days='4'
          />
        </div>
      </div>
      <ShowAll title='Show all adventures' />
    </div>
  );
};
