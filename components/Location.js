export default ({ location, price }) => {
  return (
    <div className='py-3 my-2'>
      <h3 className='font-semibold'>{location}</h3>
      <p className='font-normal'>${price}/night average</p>
    </div>
  );
};
