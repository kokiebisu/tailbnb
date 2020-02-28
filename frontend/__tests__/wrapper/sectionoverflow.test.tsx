import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { SectionOverflow } from '../../src/components/wrapper/SectionOverflow';

describe('SectionOverflow', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      title: 'test title',
      phrase: 'test phrase',
      children: null
    };
    const component = shallow(<SectionOverflow {...info} />);
    expect(component).toMatchSnapshot();
  });
});
