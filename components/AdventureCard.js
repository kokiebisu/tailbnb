export default ({ img, location, title, price, days }) => {
  return (
    <div className='lg:w-11/12'>
      <img className='rounded-lg' src={img} alt='adventure1' />
      <p className='uppercase text-sm my-2 font-bold'>{location}</p>
      <p className='my-1'>{title}</p>
      <p>
        {price}
        <span> · </span>
        {days} days
      </p>
    </div>
  );
};
