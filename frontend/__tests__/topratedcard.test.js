import React from 'react';
import { shallow } from 'enzyme';

// Component
import TopRatedCard from '../src/components/TopRatedCard';

describe('TopRateCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TopRatedCard />);
    expect(component).toMatchSnapshot();
  });
});
