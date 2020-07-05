import * as React from 'react';

// Wrapper
import { HostSection } from '../../host/wrapper/HostSection';

// Functions
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

export const GreatPrice: React.FC<{}> = () => {
  return (
    <HostSection title='A great price, every night'>
      <div className='lg:flex'>
        <div className='w-1/2'>
          <CharacteristicCard
            children={null}
            title='Trusted pricing advice'
            description='What you charge is always up to you. If you want some help, we have tools that match your prices with demand, ensuring a great price for every night.'
            link={null}
          />
        </div>

        <div className='w-1/2'>
          <img
            className='w-full h-full'
            src='https://a0.muscache.com/pictures/459f10c1-164a-4c8e-ac14-69b6d39c1229.jpg'
          />
        </div>
      </div>
      <div className='lg:flex'>
        <CharacteristicCard
          title='Extra money for services'
          description='You can require additional fees upfront for things like extra guests or house cleaning. And if you want to provide other services, such as equipment rental or a tour, guests can pay you through the app for those after they book.'
          link={null}>
          <div className='w-12 h-12'>
            <svg
              className='w-full h-full'
              viewBox='0 0 24 24'
              style={{ fill: '#60B6B5' }}>
              <path
                style={{ fill: '#484848' }}
                d='m22 21.5c0 1.033-.562 1.5-1.5 1.5h-8c-.948 0-1.5-.459-1.5-1.5v-6c0-.515.273-1.062.854-1.647l3-2.999c.093-.094.146-.22.146-.352.002-.679.004-1.358.004-2.002h2.996v2c0 .133.053.26.146.354l3 3c.581.584.854 1.131.854 1.646zm-12-18.5c-.517 0-1-.363-1-1 0-.65.416-1 1-1zm11.854 10.147-2.854-2.854v-2.793c0-.276-.224-.5-.5-.5s-.5.224-.5.5h-2.995c0-.799-.002-1.497-.005-2.003-.007-1.203-1.741-2.497-3-2.497h-1v-2h7.5c1.159 0 2.013.897 2.013 2.005 0 1.088-.871 1.995-2.013 1.995-.276 0-.5.224-.5.5s.224.5.5.5c1.703 0 3.013-1.364 3.013-2.995 0-1.65-1.29-3.005-3.013-3.005h-8.5c-1.102 0-2 .755-2 2 0 1.256.976 1.994 1.988 2-.078 1.673-.551 3.253-1.421 4.749-.201.346.067.777.467.75 1.104-.075 2.043-.45 2.799-1.126.722-.644 1.265-1.368 1.622-2.169.113-.252 0-.548-.252-.66-.252-.113-.548 0-.66.252-.299.668-.756 1.277-1.376 1.831-.361.322-.776.557-1.25.703.65-1.375 1.008-2.82 1.072-4.33h1.011c.761 0 1.996.922 2 1.503.006 1.043.007 2.906.001 4.789l-2.855 2.854c-.753.76-1.146 1.545-1.146 2.354v6c0 1.639 1.037 2.5 2.5 2.5h8c1.454 0 2.5-.869 2.5-2.5v-6c0-.809-.393-1.594-1.146-2.353z'></path>
              <path d='m18.1738 14.4844c.544-.096.907-.614.811-1.158s-.615-.907-1.159-.811-.907.615-.81 1.158c.096.544.614.908 1.158.811m.326 1.516c-1.507 0-2-1-4.002-1s-2.498 1.336-2.498 2v3.5c0 1.503.624 1.5 1.5 1.5h6c1.024 0 1.5-.101 1.5-1.5v-4c0-2.331-.993-.5-2.5-.5m-14.756-12.241c-1.085 0-1.488-.931-1.488-1.519 0-.133-.114-.24-.256-.24-.141 0-.256.107-.256.24 0 .588-.403 1.519-1.488 1.519-.142 0-.256.108-.256.241 0 .132.114.24.256.24 1.085 0 1.488.931 1.488 1.519 0 .133.115.241.256.241.142 0 .256-.108.256-.241 0-.588.403-1.519 1.488-1.519.142 0 .256-.108.256-.24 0-.133-.114-.241-.256-.241m1.582 2.256c-.544.096-.907.615-.81 1.158.095.544.614.908 1.158.811.544-.096.907-.614.811-1.158s-.615-.907-1.159-.811m-.818-3.428c-.048-.272.133-.532.405-.58.272-.047.532.133.579.406.048.271-.132.531-.405.579-.271.048-.531-.133-.579-.405'></path>
            </svg>
          </div>
        </CharacteristicCard>
        <CharacteristicCard
          title='Custom to your needs'
          description='You can set custom prices for seasons, weekends, and any other nights where you want to control what you charge. You can also provide weekly and monthly discounts for people who are looking to stay a while.'
          link={null}>
          <div className='w-12 h-12'>
            <svg
              className='w-full h-full'
              viewBox='0 0 24 24'
              style={{ fill: '#60B6B5' }}>
              <path d='m21 7.51v2.73a.51.51 0 0 1 -.5.51h-9.18a1.88 1.88 0 0 1 0-3.75h9.19a.5.5 0 0 1 .5.51zm-7.83 5.74h-7.78a.5.5 0 0 0 -.5.47 22.46 22.46 0 0 1 -.38 2.68.5.5 0 0 0 .48.6h8.18a1.88 1.88 0 0 0 0-3.75z'></path>
              <path
                style={{ fill: '#484848' }}
                d='m23 5v17.5a.5.5 0 0 1 -.5.5h-17a .5.5 0 0 1 -.5-.5v-1a .5.5 0 0 1 1 0v .5h16v-16.5h-.5a.5.5 0 0 1 0-1h1a .5.5 0 0 1 .5.5zm-6.26 15h-13.44a1.66 1.66 0 0 1 -1.36-.67 1.33 1.33 0 0 1 -.18-1.22 27.09 27.09 0 0 0 1.24-8.73v-6.88a.5.5 0 0 1 .5-.5h3.5v-1a .5.5 0 0 1 1 0v1h7v-1a .5.5 0 0 1 1 0v1h3.5a.5.5 0 0 1 .5.5v6.88c0 4.6-.65 8.03-1.87 9.91a1.63 1.63 0 0 1 -1.39.71zm-13.44-1h13.44a.66.66 0 0 0 .55-.25c.78-1.2 1.71-3.8 1.71-9.37v-6.38h-3v1.5a.5.5 0 0 1 -1 0v-1.5h-7v1.5a.5.5 0 0 1 -1 0v-1.5h-3v6.38a27.86 27.86 0 0 1 -1.3 9.06.33.33 0 0 0 .05.31.67.67 0 0 0 .55.25z'></path>
            </svg>
          </div>
        </CharacteristicCard>
      </div>
    </HostSection>
  );
};
