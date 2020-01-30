import Location from '../components/Location';

export default () => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>
        Popular destinations in the United States
      </h3>
      <div className='flex flex-wrap items-center justify-start w-full my-5'>
        <div className='lg:w-1/5'>
          <Location location='San Francisco' price='216' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Los Angeles' price='213' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='New York' price='159' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Seattle' price='134' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Denver' price='128' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Washington DC' price='166' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Phoenix' price='232' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Austin' price='242' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='Houston' price='351' />
        </div>
        <div className='lg:w-1/5'>
          <Location location='New Orleans' price='210' />
        </div>
      </div>
    </div>
  );
};
