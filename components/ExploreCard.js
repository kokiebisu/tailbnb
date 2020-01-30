export default ({ img, title }) => {
  return (
    <div className='lg:w-1/3'>
      <div className='mr-4 flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white'>
        <img
          src={img}
          className='rounded-xl rounded-r-none'
          style={{ height: 80, width: 'auto' }}
          alt='explore1'
        />
        <p class='pl-4 text-gray-750 font-semibold'>{title}</p>
      </div>
    </div>
  );
};
