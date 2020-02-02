export default ({ location, price }) => {
  return (
    <div className='w-30/31 py-3 my-2'>
      <h3 className='font-semibold'>{location}</h3>
      <p className='text-xs font-normal text-gray-650 text-sm'>
        ${price}/night average
      </p>
    </div>
  );
};
