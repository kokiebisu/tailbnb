import React from 'react';
import { shallow } from 'enzyme';

// Component
import StayCard from '../src/components/StayCard';

describe('StayCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<StayCard />);
    expect(component).toMatchSnapshot();
  });
});
