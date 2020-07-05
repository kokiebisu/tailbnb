import * as React from 'react';
import Link from 'next/link';

interface Prop {
  id: string;
  host_is_superhost: string;
  name: string;
  price: number;
  country: string;
  reviews_per_month: number;
  picture_url: string;
}

export const StayCard: React.FC<Prop> = ({
  id,
  host_is_superhost,
  name,
  price,
  country,
  reviews_per_month,
  picture_url
}) => {
  const renderhost = (host_is_superhost: string) => {
    if (host_is_superhost == 't') {
      return (
        <>
          <div className='flex items-center justify-between'>
            <div className='flex flex-wrap items-center'>
              <div className='mt-2 mb-1'>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='uppercase border border-gray-800 rounded text-xs px-1'>
                  Superhost
                </p>
              </div>
              <div className='ml-1 mt-1'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-sm text-gray-750'>
                  {country}
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='h-3 w-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-full h-full'
                  viewBox='0 0 37.286 37.287'
                  style={{ fill: '#F5385D', marginTop: 5 }}>
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
              </div>

              <p className='pl-1 text-sm'>{reviews_per_month}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className='md:flex md:flex-wrap md:items-center md:justify-start'>
          <p className='mt-3 text-sm sm:my-2 font-light text-gray-600'>
            {country}
          </p>
        </div>
      );
    }
  };

  return (
    <Link href='/stays/[id]' as={`/stays/${id}`}>
      <div className='cursor-pointer'>
        <div>
          <img className='w-full h-full rounded' src={picture_url} />
        </div>

        <div className=''>{renderhost(host_is_superhost)}</div>
        <div>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-sm md:text-base text-gray-850 truncate'>
            {name}
          </p>
        </div>
        <div className='hidden md:block'>
          <p style={{ fontFamily: 'airbnb-book' }}>
            <span
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-850'>
              ${price} CAD
            </span>
            /night
          </p>
        </div>
      </div>
    </Link>
  );
};
