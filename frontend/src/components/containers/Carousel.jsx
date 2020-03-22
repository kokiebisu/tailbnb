import * as React from 'react';

export const Carousel = () => {
  return (
    <div className='w-full h-96 relative overflow-hidden'>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * 3}>
        <CarouselCard
          bg='blue'
          featured1={featureds[0]}
          featured2={featureds[1]}
          featured3={featureds[2]}
        />
        <CarouselCard
          bg='blue'
          featured1={featureds[3]}
          featured2={featureds[4]}
          featured3={featureds[5]}
        />
        <CarouselCard
          bg='blue'
          featured1={featureds[6]}
          featured2={featureds[7]}
          featured3={featureds[8]}
        />
      </SliderContent>
    </div>
  );
};
