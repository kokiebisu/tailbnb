import StayCard from '../components/StayCard';

import ShowAll from '../components/ShowAll';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Places to stay around the world
      </h3>
      <div className='flex flex-wrap items-center justify-start w-full'>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
        <div className='w-1/4 py-5'>
          <StayCard
            location='Sol Madrid'
            title='Private Studio in Sol, Madrid'
            price='$91 CAD'
          />
        </div>
      </div>
      <ShowAll title='Show(2000+)' />
    </div>
  );
};
