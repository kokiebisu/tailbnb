import React from 'react';
import { shallow } from 'enzyme';

// Component
import ShowAll from '../src/components/ShowAll';

describe('ShowAll', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ShowAll />);
    expect(component).toMatchSnapshot();
  });
});
