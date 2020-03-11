import * as React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
  img: string;
  title: string;
  cost: number;
  ratings: number;
  reviews: number;
  category: string;
}

export const LocationExperienceCard: React.FC<Props> = ({
  id,
  img,
  title,
  cost,
  ratings,
  reviews,
  category
}) => {
  return (
    <Link href='/experiences/[id]' as={`/experiences/${id}`}>
      <div className='w-30/31 cursor-pointer'>
        <div>
          <img className='w-full h-full rounded-lg' src={img} />
        </div>
        <div className='mt-2 mb-1 md:mb-2'>
          <p id='card_category' className='uppercase text-2xs md:text-xs'>
            {category}
          </p>
        </div>
        <div
          className='text-sm md:text-base'
          style={{ fontFamily: 'airbnb-book' }}>
          <div className='my-1'>
            <p className='truncate'>{title}</p>
          </div>
          <div>
            <p>From ${cost}/person</p>
          </div>
          <div className='flex items-center'>
            <div className='h-2 w-2 md:h-3 md:w-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-full h-full'
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
            </div>

            <div className='pl-1'>
              <p className='text-xs md:text-sm'>{ratings}</p>
            </div>
            <div>
              <p className='text-gray-650 text-xs md:text-sm'>
                &nbsp; ({reviews})
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
