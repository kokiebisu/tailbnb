import styled from 'styled-components';

export const renderSkeletonVertical = (number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-full mr-3 mb-3 rounded h-64 md:h-104 py-8'>
        <div id='skeleton-pulse--vertical' />
        <div className='w-full mb-3 h-4'>
          <div id='skeleton-pulse--vertical' />
        </div>
        <div className='w-80p h-4'>
          <div id='skeleton-pulse--vertical' />
        </div>
      </div>
    );
  }
  return content;
};

export const renderSkeletonHorizontal = (number, withLine) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-full mr-3 mb-3 rounded h-24 mb-16 md:h-40 lg:h-48 xl:h-56'>
        <div id='skeleton-pulse--horizontal' />
        {withLine ? (
          <>
            <div className='w-full mb-3 h-4'>
              <div id='skeleton-pulse--horizontal' />
            </div>
            <div className='w-80p h-4'>
              <div id='skeleton-pulse--horizontal' />
            </div>
          </>
        ) : null}
      </div>
    );
  }
  return content;
};

export const renderSkeletonThreeColumn = (number, withLine) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-full mr-3 mb-3 rounded h-48 md:h-56 lg:h-64'>
        <div id='skeleton-pulse--horizontal' />
        {withLine ? (
          <>
            <div className='w-full mb-3 h-4'>
              <div id='skeleton-pulse--horizontal' />
            </div>
            <div className='w-80p h-4'>
              <div id='skeleton-pulse--horizontal' />
            </div>
          </>
        ) : null}
      </div>
    );
  }
  return content;
};
