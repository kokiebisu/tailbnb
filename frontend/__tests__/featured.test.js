import React from 'react';
import { shallow } from 'enzyme';

// Component
import Featured from '../src/components/Featured';

describe('Featured', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Featured />);
    expect(component).toMatchSnapshot();
  });
});
