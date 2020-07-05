import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { FooterInducer } from '../../src/components/layout/FooterInducer';

describe('FooterInducer', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      swap: () => console.log('test purpose')
    };
    const component = shallow(<FooterInducer {...info} />);
    expect(component).toMatchSnapshot();
  });
});
