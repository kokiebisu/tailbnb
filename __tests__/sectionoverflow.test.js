import React from 'react';
import { shallow } from 'enzyme';

// Component
import SectionOverflow from '../src/components/SectionOverflow';

describe('SectionOverflow', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SectionOverflow />);
    expect(component).toMatchSnapshot();
  });
});
