import Location from '../components/Location';

export default () => {
  return (
    <>
      <div className='flex flex-wrap items-center justify-start w-full my-5'>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='San Francisco' price='216' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Los Angeles' price='213' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='New York' price='159' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Seattle' price='134' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Denver' price='128' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Washington DC' price='166' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Phoenix' price='232' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Austin' price='242' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='Houston' price='351' />
        </div>
        <div className='text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5'>
          <Location location='New Orleans' price='210' />
        </div>
      </div>
    </>
  );
};
