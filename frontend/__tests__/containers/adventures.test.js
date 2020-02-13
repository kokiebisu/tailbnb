import React from 'react';
import { shallow } from 'enzyme';

// Component
import Adventures from '../../src/components/containers/Adventures';

describe('Adventure', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Adventures />);
    expect(component).toMatchSnapshot();
  });
});
