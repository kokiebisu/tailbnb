import * as React from 'react';
import styled from 'styled-components';

export const SearchBar = () => {
  return (
    <Wrapper className='flex border border-gray-300 rounded-xl'>
      <div
        style={{ padding: '0.5rem 0.8rem' }}
        className='border-r border-gray-300'>
        <button
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:text-gray-750 text-gray-650 text-sm'>
          Add destination
        </button>
      </div>
      <div
        style={{ padding: '0.5rem 0.8rem' }}
        className='border-r border-gray-300'>
        <button
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:text-gray-750 text-gray-650 text-sm'>
          Add dates
        </button>
      </div>
      <div
        style={{ padding: '0.5rem 0.8rem' }}
        className='border-r border-gray-300'>
        <button
          style={{ fontFamily: 'airbnb-book' }}
          className='hover:text-gray-750 text-gray-650 text-sm'>
          Add guests
        </button>
      </div>
      <div className='flex justify-center' style={{ padding: '0.5rem 1rem' }}>
        <button>
          <div className='w-4'>
            <svg viewBox='0 0 515.558 515.558'>
              <g>
                <path
                  d='m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z'
                  data-original='#000000'
                  class='active-path'
                  data-old_color='#000000'
                  fill='#FB5252'
                />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  }
`;
