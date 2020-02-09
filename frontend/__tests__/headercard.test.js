import React from 'react';
import { shallow } from 'enzyme';

// Component
import HeaderCard from '../src/components/HeaderCard';

describe('HeaderCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HeaderCard />);
    expect(component).toMatchSnapshot();
  });
});
