import React from 'react';
import { shallow } from 'enzyme';

// Component
import FeaturedCard from '../src/components/FeaturedCard';

describe('FeaturedCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FeaturedCard />);
    expect(component).toMatchSnapshot();
  });
});
