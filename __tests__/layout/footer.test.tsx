import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Footer } from '../../src/components/layout/Footer';

describe('Footer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
