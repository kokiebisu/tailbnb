import React from 'react';
import { shallow } from 'enzyme';

// Component
import Location from '../../src/components/presentational/Location';

describe('Location', () => {
  it('should render correctl in "debug" mode', () => {
    const component = shallow(<Location />);
    expect(component).toMatchSnapshot();
  });
});
