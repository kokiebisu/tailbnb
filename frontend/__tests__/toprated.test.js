import React from 'react';
import { shallow } from 'enzyme';

// Component
import TopRated from '../src/components/TopRated';

describe('TopRated', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TopRated />);
    expect(component).toMatchSnapshot();
  });
});
