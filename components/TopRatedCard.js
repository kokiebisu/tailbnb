export default ({ img, location, title, price, reviews }) => {
  return (
    <div className='lg:w-30/31'>
      <img className='rounded-lg' src={img} alt='adventure1' />
      <p className='uppercase text-sm my-2 font-bold'>{location}</p>
      <p className='my-1'>{title}</p>
      <p>From ${price}/person</p>
      <div className='flex items-center justify-start flex-wrap'>
        <svg
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='13'
          height='13'
          viewBox='0 0 37.286 37.287'>
          <g>
            <path
              d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
		c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
		c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
		c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
		c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
		C37.425,15.013,37.226,15.808,36.683,16.339z'
            />
          </g>
        </svg>
        <p className='pl-1 text-sm'>4.71</p>
        <p className='text-gray-650 text-sm'>&nbsp; ({reviews})</p>
      </div>
    </div>
  );
};
