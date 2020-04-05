import React from 'react';
import { useState } from 'react';

export const BottomNav = () => {
  const [selected, setSelected] = useState({
    explore: true,
    saved: false,
    login: false,
  });

  return (
    <div className='w-full bg-white fixed bottom-0 z-50 h-16 border-t border-gray-400'>
      <div className='max-w-2xs mx-auto h-full'>
        <div className='h-full flex justify-between items-center'>
          <div className='flex flex-col items-center'>
            <div className='w-6'>
              <svg
                style={{ overflow: 'visible' }}
                className='w-full h-full'
                fillOpacity='0'
                stroke={selected.explore ? '#FF5A5F' : '#484848'}
                strokeWidth='1.5'
                viewBox='0 0 24 24'>
                <path d='M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z'></path>
                <path d='M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3'></path>
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'airbnb-medium',
                  color: `${selected.explore ? '#FF5A5F' : '#484848'}`,
                }}
                className='text-2xs'>
                Explore
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-6'>
              <svg
                style={{ overflow: 'visible' }}
                className='w-full h-full'
                fillOpacity='0'
                stroke={selected.saved ? '#FF5A5F' : '#484848'}
                strokeWidth='1.5'
                viewBox='0 0 24 24'>
                <path d='m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6'></path>
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'airbnb-medium',
                  color: `${selected.saved ? '#FF5A5F' : '#484848'}`,
                }}
                className='text-2xs'>
                Saved
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-6'>
              <svg
                style={{ overflow: 'visible' }}
                className='w-full h-full'
                fillOpacity='0'
                stroke={selected.login ? '#FF5A5F' : '#484848'}
                strokeWidth='1.5'
                viewBox='0 0 24 24'>
                <circle cx='12' cy='12' r='10.5'></circle>
                <path d='M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4'></path>
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'airbnb-medium',
                  color: `${selected.login ? '#FF5A5F' : '#484848'}`,
                }}
                className='text-2xs text-red-550'>
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
