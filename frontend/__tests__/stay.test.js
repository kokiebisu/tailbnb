import React from 'react';
import { shallow } from 'enzyme';

// Component
import Stay from '../src/components/Stay';

describe('Stay', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Stay />);
    expect(component).toMatchSnapshot();
  });
});
