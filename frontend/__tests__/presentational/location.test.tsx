import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Location } from '../../src/components/functions/Location';

describe('Location', () => {
  it('should render correct in "debug" mode', () => {
    const info = {
      location: 'testlocation',
      price: 10
    };
    const component = shallow(<Location {...info} />);
    expect(component).toMatchSnapshot();
  });
});
