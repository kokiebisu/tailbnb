import styled from 'styled-components';

export const RenderSkeletonVertical = (number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-full mr-3 mb-3 rounded mb-16'>
        <SSkeletonPulseVertical />
        <div className='w-full mb-3 h-4'>
          <SSkeletonPulseVertical />
        </div>
        <div className='w-80p h-4'>
          <SSkeletonPulseVertical />
        </div>
      </div>
    );
  }
  return content;
};

export const RenderSkeletonHorizontal = (number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='w-full mr-3 mb-3 rounded mb-16'>
        <SSkeletonPulseHorizontal />
        <div className='w-full mb-3 h-4'>
          <SSkeletonPulseHorizontal />
        </div>
        <div className='w-80p h-4'>
          <SSkeletonPulseHorizontal />
        </div>
      </div>
    );
  }
  return content;
};

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonPulseVertical = styled(SSkeletonPulse)`
  border-radius: 0.3rem;
`;

const SSkeletonPulseHorizontal = styled(SSkeletonPulse)`
  border-radius: 0.8rem;
`;
