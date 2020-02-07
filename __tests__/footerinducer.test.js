import React from 'react';
import { shallow } from 'enzyme';

// Component
import FooterInducer from '../src/components/FooterInducer';

describe('FooterInducer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FooterInducer />);
    expect(component).toMatchSnapshot();
  });
});
