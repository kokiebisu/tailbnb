import React from 'react';
import { shallow } from 'enzyme';

// Component
import Section from '../../src/components/wrapper/Section';

describe('Section', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Section />);
    expect(component).toMatchSnapshot();
  });
});
