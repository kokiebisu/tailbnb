import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { TopRatedCard } from '../../src/components/functions/TopRatedCard';

describe('TopRateCard', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      id: 'testid',
      img: 'testimg',
      title: 'testtitle',
      cost: 10,
      ratings: 10,
      reviews: 10,
      location: 'testlocation'
    };
    const component = shallow(<TopRatedCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
