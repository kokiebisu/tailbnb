import React from 'react';
import { shallow } from 'enzyme';

// Component
import Plus from '../src/components/Plus';

describe('Plus', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Plus />);
    expect(component).toMatchSnapshot();
  });
});
