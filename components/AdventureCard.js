export default ({ img, location, title, price, days }) => {
  return (
    <div className='w-30/31'>
      <img className='rounded-lg' src={img} alt='adventure1' />
      <p className='uppercase text-xs my-2 font-semibold'>{location}</p>
      <p className='my-1 w-5/6'>{title}</p>
      <p>
        {price}
        <span> · </span>
        {days} days
      </p>
    </div>
  );
};
