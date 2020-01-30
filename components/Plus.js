import img1 from '../public/plus-1.jpg';

import PlusCard from './PlusCard';

export default () => {
  return (
    <div class='xl:max-w-layout lg:max-w-5.5xl mx-auto mt-14 mb-`20`'>
      <h3 className='text-2xl font-semibold py-1 mt-5 '>
        Airbnb Plus places to stay
      </h3>
      <p className='mb-6'>
        A selection of places to stay verified for quality and design.
      </p>
      <PlusCard img={img1} />
    </div>
  );
};
