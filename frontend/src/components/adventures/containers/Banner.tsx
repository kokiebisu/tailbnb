import * as React from 'react';

// Function
import { BannerCard } from '../functions/BannerCard';

// Image

export const Banner: React.FC<{}> = () => {
  return (
    <div className='w-full bg-black flex justify-center'>
      <div className='px-4 md:px-16 w-full max-w-6xl xl:px-0 py-12'>
        <div className='w-full flex'>
          <div className='w-2/7 border-r-4 border-black relative bg-cover bg-center overflow-hidden'>
            <img
              className='h-full w-full'
              src='https://a0.muscache.com/im/pictures/a5845dc3-6d54-4864-a383-4dffbc16c20e.jpg?aki_policy=exp_md'
              alt=''
            />
          </div>
          <div className='w-2/7 border-r-4 border-black relative overflow-hidden'>
            <img
              className='h-full object-cover'
              src='https://a0.muscache.com/im/pictures/2cde86ed-9fa5-4776-952a-c83e0afda996.jpg?aki_policy=exp_md'
              alt=''
            />
          </div>
          <div className='border-black w-1/7 relative overflow-hidden'>
            <div className='w-full bg-blue-500 h-1/2'>
              <img
                className='h-full object-cover'
                src='https://a0.muscache.com/im/pictures/lombard/MtTemplate-1317456-media_library/original/45cba600-ef28-4667-823e-453c31944b45.jpeg?aki_policy=exp_md'
                alt=''
              />
            </div>
            <div className='w-full bg-blue-300 h-1/2'>
              <img
                className='h-full object-cover'
                src='https://a0.muscache.com/im/pictures/lombard/MtTemplate-1317456-media_library/original/5d0cbc89-ed65-4063-9ec2-83eb7690bbd7.jpeg?aki_policy=exp_md'
                alt=''
              />
            </div>
          </div>
          <div className='border-l-4 border-black w-2/7 relative overflow-hidden'>
            <img
              className='h-full object-cover'
              src='https://a0.muscache.com/im/pictures/4177e9be-7c5e-4c05-9b79-f4afd144a389.jpg?aki_policy=exp_md'
              alt=''
            />
          </div>
        </div>
        <div className='w-full lg:max-w-6xl flex justify-start items-start flex-wrap'>
          <div className='w-full md:w-1/2 lg:w-4/12'>
            <div
              style={{ fontFamily: 'airbnb-bold' }}
              className='items-end justify-start pt-6 text-xs uppercase text-white mb-1'>
              2-Day Adventure
            </div>

            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full text-3xl text-white leading-tight'>
              Atlas Mountains Experience
            </p>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full text-white '>
              Marrakech, Morocco
            </p>
            <div className='flex justify-start text-white my-2'>
              <p style={{ fontFamily: 'airbnb-bold' }}>5.0</p>
              <div className='h-3 w-3 mx-1'>
                <svg
                  className='w-full h-full'
                  style={{ fill: '#ffffff', marginTop: 6 }}
                  viewBox='0 0 511.99143 511'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657' />
                </svg>
              </div>
              <p>(1)</p>
            </div>
            <div className='flex justify-start'>
              <div
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded'>
                Hiking
              </div>
              <div
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded'>
                Trekking
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-8/12 h-full'>
            <div className='w-9/12 mt-4'>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='py-4 text-white md:text-lg md:py-10'>
                Trek & Cook with the berbers
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2  lg:w-8/12'>
            <div className='w-full flex justify-start flex-wrap'>
              <div className='flex w-1/2'>
                <BannerCard type='Duration' value={2} />
                <BannerCard type='Group size' value={6} />
              </div>
              <div className='flex w-1/2'>
                <BannerCard type='Activity level' value='moderate' />
                <BannerCard type='Hosted in' value='English' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
