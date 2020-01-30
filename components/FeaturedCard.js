export default ({ img, verified, description }) => {
  return (
    <div className='lg:w-30/31'>
      <img className='rounded-xl' src={img} alt='adventure1' />
      <div className='flex flex-wrap items-center justify-between'>
        <p className='uppercase text-xs my-2 font-bold text-pink-700'>
          {verified}+ Verified Stays
        </p>
      </div>
      <p className='my-1 text-sm tracking-wide'>{description}</p>
    </div>
  );
};
