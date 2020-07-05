import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { ShowAll } from '../src/components/ShowAll';

describe('ShowAll', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      title: 'testtitle'
    };
    const component = shallow(<ShowAll {...info} />);
    expect(component).toMatchSnapshot();
  });
});
