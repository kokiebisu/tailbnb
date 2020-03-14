import * as React from 'react';
import { ExperienceCategoryCard } from '../functions/ExperienceCategoryCard';

// Images
const cultureHistory =
  'https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg?aki_policy=x_large';
const foodDrink =
  'https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg?aki_policy=x_large';
const natureOutdoor =
  'https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg?aki_policy=x_large';

export const ExperienceCategory = () => {
  return (
    <div className='relative w-screen bg-gray-200 py-8'>
      <div className='lg:max-w-5xl mx-auto'>
        <div className='grid grid-cols-3 gap-8'>
          <ExperienceCategoryCard
            img={cultureHistory}
            title='Culture & History'
            description='Share the story behind famous landmarks in your city.'
            color='#ea3546'
          />
          <ExperienceCategoryCard
            img={foodDrink}
            title='Food & Drink'
            description='Host a food tour, cooking class, dining experience, and more.'
            color='#662e9b'
          />
          <ExperienceCategoryCard
            img={natureOutdoor}
            title='Nature & Outdoor'
            description='Lead nature hikes, water sports, mountain activities, and more.'
            color='#43bccd'
          />
        </div>
      </div>
    </div>
  );
};
