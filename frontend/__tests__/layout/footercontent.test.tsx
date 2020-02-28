import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { FooterContent } from '../../src/components/layout/FooterContent';

describe('FooterContent', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      swap: () => console.log('test purpose')
    };
    const component = shallow(<FooterContent {...info} />);
    expect(component).toMatchSnapshot();
  });
});
