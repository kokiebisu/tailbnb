export default () => {
  return (
    <div class='xl:max-x-layout lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-xl font-medium pb-1 '>Airbnb Plus places to stay</h3>
      <p className='mb-6'>
        A selection of places to stay verified for quality and design.
      </p>
      <div className='w-full'>
        <img
          className='w-full h-64 bg-cover bg-no-repeat object-cover rounded'
          src={img1}
          alt='plus1'
        />
      </div>
    </div>
  );
};
