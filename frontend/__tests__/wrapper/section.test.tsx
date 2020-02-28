import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Section } from '../../src/components/wrapper/Section';

describe('Section', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      title: 'test title',
      phrase: 'test phrase',
      children: null
    };
    const component = shallow(<Section {...info} />);
    expect(component).toMatchSnapshot();
  });
});
