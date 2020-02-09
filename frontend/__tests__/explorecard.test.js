import React from 'react';
import { shallow } from 'enzyme';

// Component
import ExploreCard from '../src/components/ExploreCard';

describe('ExploreCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ExploreCard />);
    expect(component).toMatchSnapshot();
  });
});
