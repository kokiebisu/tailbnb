import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});