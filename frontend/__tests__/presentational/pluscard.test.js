import React from 'react';
import { shallow } from 'enzyme';

// Component
import PlusCard from '../../src/components/presentational/PlusCard';

describe('PlusCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PlusCard />);
    expect(component).toMatchSnapshot();
  });
});
