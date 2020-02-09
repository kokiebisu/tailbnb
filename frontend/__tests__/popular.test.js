import React from 'react';
import { shallow } from 'enzyme';

// Component
import Popular from '../src/components/Popular';

describe('Popular', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Popular />);
    expect(component).toMatchSnapshot();
  });
});
