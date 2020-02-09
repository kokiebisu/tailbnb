import React from 'react';
import { shallow } from 'enzyme';

// Component
import FooterContent from '../src/components/FooterContent';

describe('FooterContent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FooterContent />);
    expect(component).toMatchSnapshot();
  });
});
