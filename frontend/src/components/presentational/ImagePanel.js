import React, { useState } from 'react';
import styled from 'styled-components';

export default ({ img1, img2, img3, img4, img5 }) => {
  const [loading, setLoading] = useState(true);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds) => {
    await sleep(seconds);
    setLoading(false);
  };
  setSleep(2000);
  return (
    <div id='zoomwrapper' className='flex justify-start h-half'>
      {loading ? (
        <div className='w-full lg:w-1/2 h-42v relative rounded border-r-4 border-white'>
          <SSkeletonPulse1 />
        </div>
      ) : (
        <div className='w-full lg:w-1/2 border-r-4 border-white relative bg-cover bg-no-repeat overflow-hidden rounded'>
          <img src={img1} id='zoom' className='w-full bg-cover bg-no-repeat' />
        </div>
      )}

      <div className='hidden lg:block w-1/2 relative'>
        <div className='w-full h-full flex items-start justify-start flex-wrap'>
          {loading ? (
            <div className='w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded'>
              <SSkeletonPulse2 />
            </div>
          ) : (
            <div className='rounded w-full border-l-4 border-b-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden'>
              <img
                src={img2}
                id='zoom'
                className='w-full bg-cover bg-no-repeat'
              />
            </div>
          )}
          {loading ? (
            <div className='w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded'>
              <SSkeletonPulse3 />
            </div>
          ) : (
            <div className='rounded w-full border-l-4 border-b-4 border-white md:w-1/2 h-1/2 relative overflow-hidden'>
              <img
                src={img3}
                id='zoom'
                className='w-full bg-cover bg-no-repeat'
              />
            </div>
          )}
          {loading ? (
            <div className='w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-r-4 border-white rounded'>
              <SSkeletonPulse4 />
            </div>
          ) : (
            <div className='rounded w-full border-l-4 border-t-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden'>
              <img
                src={img4}
                id='zoom'
                className='w-full bg-cover bg-no-repeat'
              />
            </div>
          )}
          {loading ? (
            <div className='w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-white rounded'>
              <SSkeletonPulse5 />
            </div>
          ) : (
            <div className='rounded w-full border-l-4 border-t-4 border-white md:w-1/2 h-1/2 relative overflow-hidden'>
              <img
                src={img5}
                id='zoom'
                className='w-full bg-cover bg-no-repeat'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonPulse1 = styled(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;

const SSkeletonPulse2 = styled(SSkeletonPulse)`
  animation: pulse 1.5s ease-in-out infinite;
`;

const SSkeletonPulse3 = styled(SSkeletonPulse)`
  animation: pulse 1.8s ease-in-out infinite;
`;

const SSkeletonPulse4 = styled(SSkeletonPulse)`
  animation: pulse 2.1s ease-in-out infinite;
`;

const SSkeletonPulse5 = styled(SSkeletonPulse)`
  animation: pulse 2.4s ease-in-out infinite;
`;
