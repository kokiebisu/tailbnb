import React from 'react';
import { shallow } from 'enzyme';

// Component
import ExploreCard from '../../src/components/presentational/ExploreCard';

describe('ExploreCard', () => {
  it('should render correctly in "debug" mode', () => {
    const title = 'random';
    const component = shallow(<ExploreCard title={title} />);
    expect(component).toMatchSnapshot();
  });
});
