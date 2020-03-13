import * as React from 'react';
import { CharacteristicCard } from '../../host/functions/CharacteristicCard';

export const WhyHost: React.FC<{}> = () => {
  return (
    <div className='w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto lg:flex'>
      <CharacteristicCard
        children={null}
        title='Why host on Airbnb?'
        description='No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host travellers. You’re in full control of your availability, prices, house rules, and how you interact with guests.'
        link={null}
      />
      <CharacteristicCard
        children={null}
        title='We have your back'
        description='To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property damage protection and another $1M USD in insurance against accidents.'
        link={null}
      />
    </div>
  );
};
